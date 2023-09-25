import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetaliContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  console.log(pid);

  useEffect(() => {
    /*     mFetch(Number(pid))
      .then((resp) => {
        console.log(resp);
        setProduct(resp);
      })
      .catch((err) => console.log(err)); */

    const db = getFirestore();
    const queryDoc = doc(db, "products", pid);
    getDoc(queryDoc)
      .then((resp) => ({ id: resp.id, ...resp.data() }))
      .then((resp) => setProduct(resp));
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetaliContainer;
