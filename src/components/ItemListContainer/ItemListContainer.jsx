import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList.jsx/ItemList";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "products");

    if (cid) {
      const queryCollectionFilter = query(
        where("category", "==", cid)
      );
      getDocs(queryCollectionFilter)
        .then((respuesta) =>
          setProduct(
            respuesta.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollections)
        .then((respuesta) =>
          setProduct(
            respuesta.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <div className="mt-6 px-20 bg-slate-100 py-20">
      {cid ? (
        <h1 className="font-bold text-4xl text-center ">category</h1>
      ) : (
        <h1 className="font-bold text-4xl text-center ">{props.greeting}</h1>
      )}
      <section className="mt-10 flex flex-wrap gap-10 justify-center ">
        {loading ? <h1>Loading ...</h1> : <ItemList products={products} />}
      </section>
    </div>
  );
};

export default ItemListContainer;
