import React, {useState} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import {useCartContext} from "../../../context/CartContext";
import {Link} from "react-router-dom";

export default function CardBody({product}) {
  const {id, title, detail, price, stock, category} = product;
  const {addItem} = useCartContext();
  const [disabledCard, setDisabledCard] = useState(false);

  /*
  * PD: Sería mucho mejor elevar el estado, pero no puedo, ya que el ancestro común es la App.js,
  * ¿debería de hacer un estado para un valor derivado de otro estado con este disabled? O ¿debería de hacer un contexto?
  * */

  function handleAdd(cantidad){
    addItem(product, cantidad);
    alert("Producto agregado exitosamente!");
  }

  function onDisabledCounter(){
    setDisabledCard(true);
  }

  return(
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <CardText stock={stock} disabledCard={disabledCard} category={category} detail={detail} price={price}/>
      <ItemCount
        buttonText={"Agregar al carrito"}
        initial={1}
        stock={stock}
        idComprado={id}
        onAdd={handleAdd}
        onDisabledCounter={onDisabledCounter}
      />
      <Link to={`/item/${id}`}>
        <button className="btn btn-primary my-3 mx-5 px-5">Ver detalle</button>
      </Link>
    </div>
  );
}

function CardText({category, detail, price, stock, disabledCard}) {
  return(
    <p className="card-text">
      {detail} <br/>
      Por si acaso, su categoría es de los/las {category} <br/>
      Precio: ${price} <br/>
      Stock disponible: {disabledCard ? `${stock} (Gracias)` : stock}
    </p>
  );
}