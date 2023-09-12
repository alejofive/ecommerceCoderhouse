import ItemCoun from "../../Counter/ItemCoun";

const ItemDetail = ({ product }) => {
  const onAdd = (count) => {
    console.log("productos selecconados: ", count);
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
            <span className="font-medium text-2xl mb-2">{product.name}</span>
            <span className="font-medium text-md"> ${product.price}</span>
            <span className="font-light text-sm">{product.description}</span>
          </p>

          <div>
            <ItemCoun initial={1} stock={product.stock} onAdd={onAdd} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
