import { Route, HashRouter as Router, Routes } from "react-router-dom";

import {
  CartContainer,
  ItemDetailContainer,
  ItemListContainer,
  NavBar,
} from "./components";

import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Lista de productos" />}
            />
            <Route path="/category/:cid" element={<ItemListContainer />} />

            <Route path="/detalle/:pid" element={<ItemDetailContainer />} />

            <Route path="/cart/" element={<CartContainer />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </>
  );
}

export default App;
