import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

function Card({productoUnico}) {
    let {title, img, detail, price, stock, category} = productoUnico;
    const [cantidad, setCantidad] = React.useState(0);
    const [compraLista, setCompraLista] = React.useState(false);

    const agregarAlCarro = (cantidad) => {
        alert(`Has comprado ${cantidad} ${title}/es/as`);
        setCantidad(cantidad);
        setCompraLista(true);
        console.log(`Acabo de guardar la siguiente cantidad desde el ItemCount hijo: ${cantidad}`);
    }

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