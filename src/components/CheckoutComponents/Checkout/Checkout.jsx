import React, {useEffect, useState} from "react";
import {traerUnaOrden} from "../../../services/Firestore";
import {useParams} from "react-router-dom";

function Checkout() {
  const {orderId} = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    traerUnaOrden(orderId).then((ordenDeSDK) => setOrder(ordenDeSDK));
  }, [orderId]);

  console.log(order);

  return (
    <div>
      <h2 className="text-center fs-2">Gracias por tu compra! Tu Id de orden es: {orderId}</h2>
      <h3 className="text-center fs-3">Compraste unas:</h3>
      <ul>
        {order.items?.map((item) => (
          <li className="text-center" key={item.id}>{item.title} en una cantidad de {item.quantity}</li>
        ))}
      </ul>
      <h4 className="text-center fs-4">Siendo sincero, aún no estilizo esto, pero pienso hacer algo mucho más bonito antes de hacer la entrega jaja. No centré bien la lista (la unordered list, los bullets están a la izquierda) tampoco, ojo con eso</h4>
      <p className="text-center">Pero en realidad no importa, ya que no lo dejaré así para la entrega</p>
    </div>
  );
}

export default Checkout;