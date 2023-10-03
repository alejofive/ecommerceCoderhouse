const Form = (handleAddCart, handleOnChange, dataForm) => {
  return (
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
  );
};

export default Form;
