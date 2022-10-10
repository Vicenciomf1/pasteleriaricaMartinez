import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {useCartContext} from "../../context/CartContext";
//Antes del custom Hook era un:
//import React, { useContext } from 'react'
//import {cartContext, useCartContext} from "../../context/CartContext";
//Y dentro de la función Card un const {addItem} = useContext(cartContext);
//Es decir, reducimos la cantidad de importaciones.

function Card({productoUnico}) {
    //Datos externos como props o contexto
    let {title, img, detail, price, stock, category} = productoUnico;
    const {addItem} = useCartContext();

    //Estados
    const [compraLista, setCompraLista] = React.useState(false);

    //Métodos
    const agregarAlCarro = (cantidad) => {
        addItem(productoUnico, cantidad);
        setCompraLista(true);
    }

    //El nodo JSX a renderizar
    return (
        <div className="col-12">
            <div className="card mx-auto" style={{width: "40rem"}}>
                <img src={img} className="card-img-top" alt={`Una foto de un/a ${title}`}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {detail} <br/>
                        Por si acaso, su categoría es de los/las {category} <br/>
                        Precio: ${price} <br/>
                        Stock disponible: {stock}
                    </p>
                    {
                        compraLista
                            ? <Link to="/cart"><button className="btn btn-primary">Terminar compra</button></Link>
                            : <ItemCount initial={1} stock={stock} onAdd={agregarAlCarro} buttonText="Comprar ahora"/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Card