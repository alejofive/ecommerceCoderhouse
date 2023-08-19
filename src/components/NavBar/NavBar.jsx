import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <div className="flex items-center">
        <h1 className="font-bold text-3xl mr-10">COMPRAS</h1>

        <nav>
          <a href="" className="mr-3">
            TODO
          </a>
          <a href="" className="mr-3">
            BOTAS
          </a>
          <a href="" className="mr-3">
            CAMISAS
          </a>
        </nav>
      </div>

      <CartWidget />
    </div>
  );
};

export default NavBar;
