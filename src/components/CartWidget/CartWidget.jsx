import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalAmount } = useCartContext();
  return (
    <>
      <div className="flex">
        <button className="ml-20 w-full relative">
          {totalAmount() !== 0 && (
            <span className="w-[25px] h-[25px] bg-red-700 rounded-full justify-center items-center text-center text-white absolute -top-3 ">
              {totalAmount()}
            </span>
          )}
          <ShoppingCartIcon className="w-[30px] h-[30px]" />
        </button>
      </div>
    </>
  );
};

export default CartWidget;
