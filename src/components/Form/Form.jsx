const Form = ({ handleAddCart, handleOnChange, dataForm }) => {
  const isEmailValid = (email) => {
    // Utiliza una expresión regular para validar el correo electrónico.
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  const isNameValid = (name) => {
    // Verifica si el nombre tiene al menos 4 caracteres.
    return name.length >= 4;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid(dataForm.name)) {
      alert("El nombre debe tener al menos 4 caracteres");
      return;
    }

    if (!isEmailValid(dataForm.email)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    // Si las validaciones pasan, llama a la función handleAddCart.
    handleAddCart(e);
  };

  return (
    <form className="mt-10 flex " onSubmit={handleSubmit}>
      <input
        className="border-b border-black px-2 mr-4 rounded"
        type="text"
        name="name"
        placeholder="Ingrese el Nombre"
        value={dataForm.name}
        onChange={handleOnChange}
        required
      />
      <input
        className="border-b border-black px-2 mr-4 rounded"
        type="text"
        name="phone"
        placeholder="Ingrese el Telefono"
        value={dataForm.phone}
        onChange={handleOnChange}
        required
      />
      <input
        className="border-b border-black px-2 mr-4 rounded"
        type="email"
        name="email"
        placeholder="Ingrese el Email"
        value={dataForm.email}
        onChange={handleOnChange}
        required
      />

      <button type="submit">terminar compra</button>
    </form>
  );
};

export default Form;
