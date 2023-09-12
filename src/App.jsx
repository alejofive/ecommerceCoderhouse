import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ItemDetaliContainer from "./components/ItemDetailContainer/ItemDetaliContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const onAdd = (count) => {
    console.log(count);
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Lista de productos" />}
          />
          <Route path="/category/:cid" element={<ItemListContainer />} />

          <Route path="/detalle/:pid" element={<ItemDetaliContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
