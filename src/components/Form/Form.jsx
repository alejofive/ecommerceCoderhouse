const Form = ({ handleAddCart, handleOnChange, dataForm }) => {
  const isEmailValid = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  const isNameValid = (name) => {
    return name.length >= 4;
  };
  const isPhoneValid = (phone) => {
    const phonePattern = /^.{4,12}$^[0-9]+$/;
    return phonePattern.test(phone);
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

    if (!isPhoneValid(dataForm.phone)) {
      alert("Ingrese su numero telefonico correctamente");
      return;
    }

    handleAddCart(e);
  };

  return (
    <form className="mt-10 flex pb-9" onSubmit={handleSubmit}>
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

      <button type="submit" className="bg-green-600 text-white px-4 py-1 ">
        Terminar compra
      </button>
    </form>
  );
};

export default Form;
