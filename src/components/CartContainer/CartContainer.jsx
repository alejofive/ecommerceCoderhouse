import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";

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

    // insetar un item(order)
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

  //Form

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {id !== "" && <h3>Se a generado la orden de compra{id}</h3>}
      {cartList.length > 0 ? (
        <div className="flex flex-col items-center">
          <CartContainer />
          <Form
            handleAddCart={handleAddCart}
            handleOnChange={handleOnChange}
            dataForm={dataForm}
          />

          {totalPrice() !== 0 && <h2>Precio Total:{totalPrice()}</h2>}

          <button
            onClick={deleteCart}
            className="bg-black px-10 py-2 text-xl font-semibold text-white "
          >
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <div>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">Regresar</Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
