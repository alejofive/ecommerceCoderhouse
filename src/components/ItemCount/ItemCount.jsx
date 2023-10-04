import { useCounter } from "../hook/useCounter";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, handleAdd, handleSubtract } = useCounter(initial, stock);
  return (
    <div className="flex flex-col items-center">
      <div>
        <button className="border px-4" onClick={handleSubtract}>
          -
        </button>
        <label>
          <strong className="mx-4">{count}</strong>
        </label>
        <button className="border px-4" onClick={handleAdd}>
          +
        </button>
      </div>
      <button
        className="bg-black mt-2 text-white px-4 py-1"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
