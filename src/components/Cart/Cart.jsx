import React from 'react';
import CartProduct from "./CartProduct";
import {useCartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

const Cart = () => {
    const vacio = false;
    const { cart, getTotalPrice, removeItem } = useCartContext();

    const nodoCarroVacio = (
        <div className="d-flex flex-column align-items-center">
            <p className="text-center">Tu carrito está vacío, te invitamos a comprar algo :)</p>
            <Link to="/"><button className="btn btn-primary">Volver al inicio</button></Link>
        </div>
    );

    const nodoCarroConProductos = (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className="text-center">Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-center">Valor Unitario</th>
                    <th className="text-center">Importe total</th>
                    <th className="text-center">Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map((product) => (
                        <CartProduct key={product.id} product={product} onDeleteHandler={removeItem} />
                    ))
                }
                </tbody>
                <tfoot className="table-group-divider">
                    <tr>
                        <td colSpan="4" className="text-end">Total</td>
                        <td className="text-center">{getTotalPrice()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
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