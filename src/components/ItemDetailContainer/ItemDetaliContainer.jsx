import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../../utils/mockFetch";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetaliContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  console.log(pid);

  useEffect(() => {
    mFetch(Number(pid))
      .then((resp) => {
        console.log(resp);
        setProduct(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetaliContainer;
