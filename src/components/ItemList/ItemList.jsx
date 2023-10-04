import { Filter, Item } from "../";

const handleProductFilter = ({ filterState, handleFilterChange, products }) => (
  <div className="flex flex-col items-center">
    <div className="flex flex-col text-center">
      <label>Buscador</label>
      <input
        className="border border-black rounded"
        type="text"
        value={filterState}
        onChange={handleFilterChange}
      />
    </div>
    <div className="flex flex-wrap gap-11 justify-center mt-10 ">
      {filterState === ""
        ? products.map((product) => <Item key={product.id} product={product} />)
        : products
            .filter((product) =>
              product.name.toLowerCase().includes(filterState.toLowerCase())
            )
            .map((product) => <Item key={product.id} product={product} />)}
    </div>
  </div>
);

const ItemList = ({ products }) => {
  return (
    <>
      <Filter products={products}>{handleProductFilter}</Filter>
    </>
  );
};

export default ItemList;
