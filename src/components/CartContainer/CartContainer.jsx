import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartList, Form } from "../";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [id, setId] = useState("");
  const { cartList, deleteCart, totalPrice } = useCartContext();

  const handleAddCart = (e) => {
    e.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      };
    });

    order.total = totalPrice();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
        deleteCart();
      });
  };

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {id !== "" && (
        <h3 className="text-center text-3xl font-semibold">
          La compra esta hecha: {id}
        </h3>
      )}
      {cartList.length > 0 ? (
        <div className="flex flex-col items-center">
          <button
            onClick={deleteCart}
            className="bg-black px-10 py-2 text-xl font-semibold text-white mt-4"
          >
            Vaciar Carrito
          </button>
          <CartList />

          {totalPrice() !== 0 && (
            <h2 className="text-center  mt-5 text-xl font-bold">
              Precio Total: {totalPrice()}$
            </h2>
          )}

          <Form
            handleAddCart={handleAddCart}
            handleOnChange={handleOnChange}
            dataForm={dataForm}
          />
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center h-screen">
          <h2 className="text-center text-xl font-bold">
            No hay productos en el carrito
          </h2>
          <Link className="mt-3 border border-black px-4" to="/">
            Regresar
          </Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
