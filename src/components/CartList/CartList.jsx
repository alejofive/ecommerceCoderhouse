import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCartContext } from "../../context/CartContext";

const CartList = () => {
  const { cartList, deleteItem } = useCartContext();
  return (
    <div className=" mt-10 flex gap-4 justify-center flex-wrap">
      {cartList.map((prod) => (
        <div key={prod.id} className="border border-black relative">
          <img
            className="w-[300px] h-[300px] object-cover"
            src={prod.img}
            alt=""
          />
          <div className="px-4 flex justify-between items-center">
            <h3 className="text-2xl">{prod.name} </h3>
            <span className="text-xl font-bold">${prod.price}</span>
          </div>
          <span className="ml-4">Cantidad de productos: {prod.quantity}</span>
          <button
            onClick={() => deleteItem(prod.id)}
            className="absolute top-5 bg-black w-[30px] h-[30px] flex justify-center items-center rounded-full right-5 text-white"
          >
            <XMarkIcon className="w-[20px]" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
