import React from 'react';
import {useCartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";
import CheckoutForm from "../CheckoutComponents/CheckoutForm/CheckoutForm";
import TablaProductos from "./CartProductTable";


const Cart = () => {
    const { getTotalItemsInCart, cart, getTotalPrice, removeItem } = useCartContext();
    const cantidad = getTotalItemsInCart();
    const vacio = cantidad === 0;

    const nodoCarroVacio = (
        <div className="d-flex flex-column align-items-center">
            <p className="text-center">Tu carrito está vacío, te invitamos a comprar algo :)</p>
            <Link to="/"><button className="btn btn-primary">Volver al inicio</button></Link>
        </div>
    );

    const nodoCarroConProductos = (
        <>
            <TablaProductos productos={cart} obtenerPrecioTotal={getTotalPrice} onDeleteHandler={removeItem} />
            <CheckoutForm />
        </>
    );


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">Carrito de compras</h1>
                    {vacio ? nodoCarroVacio : nodoCarroConProductos}
                </div>
            </div>
        </div>
    );
};


export default Cart;