import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCart = (newProduct) => {
    const index = cartList.findIndex((product) => product.id === newProduct.id);

    if (index !== -1) {
      cartList[index].quantity += newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  const totalAmount = () =>
    cartList.reduce((count, objProduct) => count + objProduct.quantity, 0);

  const totalPrice = () =>
    cartList.reduce(
      (count, objProduct) => (count += objProduct.quantity * objProduct.price),
      0
    );

  const deleteItem = (id) =>
    setCartList(cartList.filter((product) => product.id !== id));

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

export default CartContextProvider;
