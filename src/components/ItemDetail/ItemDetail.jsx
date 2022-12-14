import React from 'react';
import {Link} from "react-router-dom";
import {useCartContext} from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({productoUnico, saludo}) {
    //Datos externos como props o contexto
    let {id,title, img, detail, price, stock, category} = productoUnico;
    const {addItem} = useCartContext();

    //Estados
    const [compraLista, setCompraLista] = React.useState(false);

    //Métodos
    const agregarAlCarro = (cantidad) => {
        addItem(productoUnico, cantidad);
        setCompraLista(true);
    }

    const disableDetail = () => setCompraLista(true);

    //El nodo JSX a renderizar
    return (
        <div className="col-12">
            <h1 className="text-center fs-1 my-5">{saludo}</h1>
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
                            : <ItemCount initial={1} stock={stock} idComprado={id} onAdd={agregarAlCarro} buttonText="Comprar ahora" onDisabledCounter={disableDetail} />
                    }

                </div>
            </div>
        </div>
    )
}

export default ItemDetail