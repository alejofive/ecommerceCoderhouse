import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [id, setId] = useState("");
  const { cartList, deleteCart, precioTotal, eliminarItem } = useCartContext();
  console.log(cartList);

  const handleAddCart = (e) => {
    e.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    order.total = precioTotal();

    // insetar un item(order)
    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    console.log("hola");
    console.log(order);
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

  console.log(dataForm);

  return (
    <>
      {id !== "" && <h3>Se a generado la orden de compra{id}</h3>}
      {cartList.length > 0 ? (
        <div className="flex flex-col items-center">
          <button
            onClick={deleteCart}
            className="bg-black px-10 py-2 text-xl font-semibold text-white "
          >
            Vaciar Carrito
          </button>
          <div className=" mt-10 flex">
            {cartList.map((prod) => (
              <div key={prod.id} className="border border-black mr-10 relative">
                <img
                  className="w-[300px] h-[300px] object-cover"
                  src={prod.img}
                  alt=""
                />
                <p className="px-4 flex justify-between items-center">
                  <h3 className="text-2xl">{prod.name} </h3>
                  <span className="text-xl font-bold">${prod.price}</span>
                </p>
                <span className="ml-4">
                  Cantidad de productos: {prod.cantidad}
                </span>
                <button
                  onClick={() => eliminarItem(prod.id)}
                  className="absolute top-5 bg-gray-500 w-[30px] h-[30px] flex justify-center items-center rounded-full right-5"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {precioTotal() !== 0 && <h2>Precio Toltal:{precioTotal()}</h2>}

          <form action="" onSubmit={handleAddCart}>
            <input
              className="border border-black"
              type="text"
              name="name"
              placeholder="Ingrese el Nombre"
              value={dataForm.name}
              onChange={handleOnChange}
            />
            <input
              className="border border-black"
              type="text"
              name="phone"
              placeholder="Ingrese el Telefono"
              value={dataForm.phone}
              onChange={handleOnChange}
            />
            <input
              className="border border-black"
              type="text"
              name="email"
              placeholder="Ingrese el Email"
              value={dataForm.email}
              onChange={handleOnChange}
            />

            <button type="submit">terminar compra</button>
          </form>
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
