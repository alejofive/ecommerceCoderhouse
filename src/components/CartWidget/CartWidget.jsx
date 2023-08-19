import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const CartWidget = () => {
  return (
    <>
      <div className="flex">
        <button className="ml-20 w-full relative">
          <span className="w-[25px] h-[25px] bg-red-700 rounded-full justify-center items-center text-center text-white absolute -top-3 ">
            2
          </span>
          <ShoppingCartIcon className="w-[30px] h-[30px]" />
        </button>
      </div>
    </>
  );
};

export default CartWidget;
