import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const activeStyle = "underline mr-3";
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-bold text-3xl mr-10">COMPRAS</h1>
        </Link>

        <nav>
          <NavLink
            to="/category/botas"
            className={({ isActive }) => (isActive ? activeStyle : "mr-3")}
          >
            BOTAS
          </NavLink>
          <NavLink
            to="/category/camisas"
            className={({ isActive }) => (isActive ? activeStyle : "mr-3")}
          >
            CAMISAS
          </NavLink>
        </nav>
      </div>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
