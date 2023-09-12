import { useState } from "react";

const Filter = ({ children, products }) => {
  const [filterState, setFilterState] = useState("");

  const handleFilterChange = (e) => {
    setFilterState(e.target.value);
  };
  return <>{children({ filterState, handleFilterChange, products })}</>;
};

export default Filter;
