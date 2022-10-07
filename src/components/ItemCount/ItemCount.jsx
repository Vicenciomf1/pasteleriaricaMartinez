import React, {useContext} from 'react';
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import "./ItemCount.css";
import {cartContext} from "../../context/CartContext";


function ItemCount({initial, stock, onAdd, buttonText, idComprado}) {
    const [contador, setContador] = React.useState(initial);
    const {cart} = useContext(cartContext);

    let yaComprados; //Necesario para consistencia y no pasar el máximo. Cada vez qu cambien el estado del contador esto se calculará de nuevo.
    try {
        yaComprados = cart.find( producto=>producto.id===idComprado ).quantity;
    } catch {
        yaComprados = 0;
    }

    const agregarUno = () => {
        (contador+yaComprados < stock) && setContador(contador + 1); // Si compras una cantidad menor que el stock, entonces puedes agregar uno más
    };
    const quitarUno = () => {
        (contador > 0) && setContador(contador - 1); // Si compras una cantidad mayor a cero, entonces puedes restar uno menos
    };

    const comprar = () => {
        if (contador+yaComprados <= stock) {  // Si quedan productos, entonces deja comprar, sea comprarlos todos o compramos menos que todos los que quedan
            onAdd(contador);
            (contador+yaComprados < stock) ? setContador(1) : setContador(0);  // Si los compras todos entonces deja el contador en cero para que no pueda comprar más.
        } else {
            alert("Acabas de hackear mi app, no deberías de poder comprar más de lo que hay en stock, por favor avísame si es que llegaste acá"); // Si compras una cantidad menor o igual al stock, entonces puedes comprar, si no, te pregunto qué es lo que hiciste jaja
        }
    };

    return (
        <div className="centrarTodo">
            <Minus accion={quitarUno}/>
            <span>{contador}</span>
            <Plus accion={agregarUno}/>
            <button onClick={comprar} className="btn btn-primary">{buttonText}</button>
        </div>
    );
}

export default ItemCount;