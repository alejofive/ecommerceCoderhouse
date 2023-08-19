import { useState } from "react";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [suma, setSuma] = useState(0);

  const sumar = () => {
    setSuma(suma + 1);
  };
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Lista de productos" />

      <div className=" flex justify-center items-center mt-5">
        <label className="mr-3">{suma}</label>
        <button
          onClick={sumar}
          className="border border-black w-[40px] rounded"
        >
          +1
        </button>
      </div>
    </>
  );
}

export default App;
