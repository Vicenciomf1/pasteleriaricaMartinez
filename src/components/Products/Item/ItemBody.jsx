import React, {useState} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import {useCartContext} from "../../../context/CartContext";
import {Link} from "react-router-dom";

export default function ItemBody({product}) {
  const {id, title, price, stock, category} = product;
  const {addItem} = useCartContext();
  const [disabledCard, setDisabledCard] = useState(false);

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
      <ItemText stock={stock} disabledCard={disabledCard} category={category} price={price}/>
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

function ItemText({category, price, stock, disabledCard}) {
  return(
    <p className="card-text">
      Categoría: {category} <br/>
      Precio: ${price} <br/>
      Stock disponible: {disabledCard ? `${stock} (Gracias)` : stock}
    </p>
  );
}