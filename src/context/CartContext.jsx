import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvaider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (newProduct) => {
    const indice = cartList.findIndex(
      (product) => product.id === newProduct.id
    );

    if (indice !== -1) {
      //si esta
      cartList[indice].quantity += newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  //cantidad total

  const totalAmount = () =>
    cartList.reduce((count, objProduct) => count + objProduct.quantity, 0);

  //precio total
  const totalPrice = () =>
    cartList.reduce(
      (count, objProduct) => (count += objProduct.quantity * objProduct.price),
      0
    );

  //Eliminar por item

  const deleteItem = (id) =>
    setCartList(cartList.filter((product) => product.id !== id));

  //Vaciar carrito

  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        deleteCart,
        totalAmount,
        totalPrice,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvaider;
