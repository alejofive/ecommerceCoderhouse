import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", pid);
    getDoc(queryDoc)
      .then((resp) => ({ id: resp.id, ...resp.data() }))
      .then((resp) => setProduct(resp))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1 className="text-center my-10 text-2xl font-bold">Loading...</h1>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
