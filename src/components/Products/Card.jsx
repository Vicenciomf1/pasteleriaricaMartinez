import React, {useContext} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import "./Card.css";
import {cartContext} from "../../context/CartContext";

function Card({product}) {
    const {id, title, img, detail, price, stock, category} = product;
    const {addItem} = useContext(cartContext);

    return (
        <div className="col-xl-3 col-lg-4 col-12">
            <div className="card tarjeta">
                <Link to={`/item/${id}`}>
                    <img
                        title={`Ir al detalle de ${title}`}
                        src={img}
                        className="card-img-top"
                        alt={`Una foto de un/a ${title} que lleva hacia su detalle`}
                    />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {detail} <br/>
                        Por si acaso, su categoría es de los/las {category} <br/>
                        Precio: ${price} <br/>
                        Stock disponible: {stock}
                    </p>
                    <ItemCount
                        buttonText={"Agregar al carrito"}
                        initial={1}
                        stock={stock}
                        idComprado={id}
                        onAdd={(cantidad) => addItem(product, cantidad) || alert("Producto agregado exitosamente!")}
                    />
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-primary my-3 mx-5 px-5">Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card