import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCartContext} from "../../../context/CartContext";
import {generarOrden} from "../../../services/Firestore";
import Input from "../CheckoutFormInput/CheckoutFormInput";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });  //Me gusta más así porque da más claridad de qué keys tiene el diccionario.

  const navigate = useNavigate();  // Redirige a otra ruta.
  const {cart, getTotalPrice} = useCartContext();

  function handleCheckout(event) {
    event.preventDefault();

    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotalPrice(),
    };

    generarOrden(orderData).then((orderId) => {
      navigate(`/checkout/${orderId}`);
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
      <form className="p-5 m-5 border" onSubmit={handleCheckout}>
        <h2 className="text-center fs-2">Finalicemos tu compra! (Pasarela de pago en proceso, la implementaré)</h2>
        <Input value={dataForm.name} type="text" name="name" onChange={inputChangeHandler}>Nombre</Input>
        <Input value={dataForm.phone} type="number" name="phone" onChange={inputChangeHandler}>Teléfono</Input>
        <Input value={dataForm.email} type="email" name="email" onChange={inputChangeHandler}>Email</Input>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;