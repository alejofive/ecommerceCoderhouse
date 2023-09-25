import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartContainer from "./components/CartContainer/CartContainer";
import ItemDetaliContainer from "./components/ItemDetailContainer/ItemDetaliContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvaider from "./context/CartContext";

function App() {
  const onAdd = (count) => {
    console.log(count);
  };

  return (
    <>
      <Router>
        <CartContextProvaider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Lista de productos" />}
            />
            <Route path="/category/:cid" element={<ItemListContainer />} />

            <Route path="/detalle/:pid" element={<ItemDetaliContainer />} />

            <Route path="/cart/" element={<CartContainer />} />
          </Routes>
        </CartContextProvaider>
      </Router>
    </>
  );
}

export default App;
