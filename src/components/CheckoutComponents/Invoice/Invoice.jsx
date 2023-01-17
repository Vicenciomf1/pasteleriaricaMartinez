import React, {useEffect, useState} from "react";
import {traerUnaOrden} from "../../../services/Firestore";
import {useParams} from "react-router-dom";

function Invoice() {
  const {orderId} = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerUnaOrden(orderId)
      .then((ordenDeSDK) => {
        setOrder(ordenDeSDK);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {return <h2 className="text-center fs-2">Cargando...</h2>}

  //Convierte los segundos del objeto timestamp de firebase a una fecha en formato dd/mm/yyyy sólo si pasa el retorno temprano del loader
  const fechaOrden = order.date.toDate().toLocaleDateString("es-AR");

  return (
    <div>
      <h2 className="text-center fs-2">Gracias por tu compra {order.buyer.name}! Tu Id de orden es: {orderId}</h2>
      <h3 className="text-center fs-3">El {fechaOrden} compraste una(s):</h3>
      {order.items?.map((item) => (
        <p className="text-center" key={item.id}>{item.title} en una cantidad de {item.quantity}</p>
      ))}
      <p className="text-center">P.D: Intenta guardar el link de compra para el futuro :)</p>
    </div>
  );
}

export default Invoice;
