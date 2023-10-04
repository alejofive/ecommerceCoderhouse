import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemList } from "../";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "products");

    if (cid) {
      const queryCollectionFilter = query(
        queryCollections,
        where("category", "==", cid)
      );
      getDocs(queryCollectionFilter)
        .then((res) =>
          setProduct(
            res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollections)
        .then((res) =>
          setProduct(
            res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <div className="mt-6 px-20 bg-slate-100 py-20">
      <h1 className="font-bold text-4xl text-center ">{props.greeting}</h1>
      <section className="mt-10 flex flex-wrap gap-10 justify-center ">
        {loading ? (
          <h1 className="my-10 text-2xl font-bold">Loading ...</h1>
        ) : (
          <ItemList products={products} />
        )}
      </section>
    </div>
  );
};

export default ItemListContainer;
