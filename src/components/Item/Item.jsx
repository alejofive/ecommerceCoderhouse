import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="bg-white w-56 h-[300px] rounded-lg shadow pb-12">
      <figure className="relative mb-2 w-full h-4/5">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.img}
          alt=""
        />
      </figure>
      <p className="flex justify-between px-4">
        <span className="text-sm font-medium">{product.name}</span>
        <span className="text-lg font-bold">${product.price}</span>
      </p>
      <p className="text-sm font-light text-center">{product.description}</p>
      <div className="flex justify-center">
        <Link to={`/detalle/${product.id}`}>
          <button className="border rounded px-5 mt-2">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
