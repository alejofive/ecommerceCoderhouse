import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvaider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProducto) => {
    const indice = cartList.findIndex(
      (product) => product.id === newProducto.id
    );

    if (indice !== -1) {
      //si esta
      cartList[indice].cantidad += newProducto.cantidad;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProducto]);
    }
  };

  //cantidad total

  const cantidadTotal = () =>
    cartList.reduce((count, objProducto) => count + objProducto.cantidad, 0);

  //precio total
  const precioTotal = () =>
    cartList.reduce(
      (count, objProducto) =>
        (count += objProducto.cantidad * objProducto.price),
      0
    );

  //Eliminar por item

  const eliminarItem = (id) =>
    setCartList(cartList.filter((product) => product.id !== id));

  //Vaciar carrito

  const deleteCart = () => {
    setCartList([]);
  }; 

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        deleteCart,
        cantidadTotal,
        precioTotal,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvaider;
