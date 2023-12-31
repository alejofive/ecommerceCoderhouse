import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [isInCount, setIsInCount] = useState(true);
  const { addCart } = useCartContext();

  const onAdd = (count) => {
    console.log("productos selecconados: ", count);
    setIsInCount(false);
    addCart({ ...product, quantity: count });
  };

  return (
    <div>
      <h1 className="text-center mt-8 font-bold text-2xl">Vista de detalle</h1>

      <section className="grid grid-cols-6 mt-10 gap-8">
        <div className="col-span-3">
          <img className="w-full" src={product.img} alt="" />
        </div>
        <div className="col-span-3">
          <p className="flex flex-col p-6">
            <span className="font-medium text-4xl"> ${product.price}</span>
            <span className="font-medium text-2xl mt-3 mb-2">
              {product.name}
            </span>
            <span className="font-light mt-4 text-sm">
              {product.description}
            </span>
          </p>

          <div className="flex justify-center">
            {isInCount ? (
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
              <>
                <Link to={"/cart"}>
                  <button className="border font-bold text-black mr-5 mt-2 px-4 py-1 ">
                    Ir Al carrito
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="border font-bold text-black  mt-2 px-4 py-1">
                    Seguir comprando
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
