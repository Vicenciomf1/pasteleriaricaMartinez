import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCartContext} from "../../../context/CartContext";
import {concretarOrdenDeCompra} from "../../../services/Firestore";
import Input from "../CheckoutFormInput/CheckoutFormInput";

function CheckoutForm() {
  // Estados
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });
  const [validezCorreo, setValidezCorreo] = useState(true);

  // Context
  const navigate = useNavigate();
  const {cart, getTotalPrice, clear} = useCartContext();

  // Handlers de eventos
  function handleCheckout(event) {
    event.preventDefault();

    if (dataForm.email !== dataForm.confirmEmail) {
      setValidezCorreo(false);
      return;
    }

    let comprador = {...dataForm};
    delete comprador.confirmEmail;
    const orderData = {
      buyer: comprador,
      items: cart,
      date: new Date(),
      total: getTotalPrice(),
    };

    concretarOrdenDeCompra(orderData).then((orderId) => {
      navigate(`/checkout/${orderId}`);
      clear();  // Limpio el carrito, porque ya compro tales productos
    });

  }

  function inputChangeHandler({target}) {
    const {name, value} = target;

    setDataForm((prevDataForm) => {
      return { ...prevDataForm, [name]: value };
    });
  }

  return (
    <div className="container px-5 py-3">
      <form className={`p-5 m-5 border`} onSubmit={handleCheckout}>
        <h2 className="text-center fs-2">Finalicemos tu compra! (Pasarela de pago en proceso, la implementaré)</h2>
        <Input value={dataForm.name} type="text" name="name" onChange={inputChangeHandler}>Nombre</Input>
        <Input value={dataForm.lastName} type="text" name="lastName" onChange={inputChangeHandler}>Apellido</Input>
        <Input value={dataForm.phone} type="number" name="phone" onChange={inputChangeHandler}>Teléfono</Input>
        <Input value={dataForm.email} type="email" name="email" onChange={inputChangeHandler}>Email</Input>
        {!validezCorreo && <p className="text-danger">Los correos no coinciden</p>}
        <Input value={dataForm.confirmEmail} type="email" name="confirmEmail" onChange={inputChangeHandler}>Confirma tu Email</Input>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;