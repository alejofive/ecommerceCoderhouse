import { useCartContext } from "../../context/CartContext";

const CartList = () => {
  const { cartList, deleteItem } = useCartContext();
  return (
    <div className=" mt-10 flex">
      {cartList.map((prod) => (
        <div key={prod.id} className="border border-black mr-10 relative">
          <img
            className="w-[300px] h-[300px] object-cover"
            src={prod.img}
            alt=""
          />
          <p className="px-4 flex justify-between items-center">
            <h3 className="text-2xl">{prod.name} </h3>
            <span className="text-xl font-bold">${prod.price}</span>
          </p>
          <span className="ml-4">Cantidad de productos: {prod.quantity}</span>
          <button
            onClick={() => deleteItem(prod.id)}
            className="absolute top-5 bg-gray-500 w-[30px] h-[30px] flex justify-center items-center rounded-full right-5"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
