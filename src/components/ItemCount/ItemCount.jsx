import React from 'react';
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import "./ItemCount.css";
import {useCartContext} from "../../context/CartContext";


function ItemCount({initial, stock, onAdd, buttonText, idComprado, onDisabledCounter}) {
    //Props desde contexto
    const {getItemQty} = useCartContext();

    //Estados
    const stockDisponible = stock - getItemQty(idComprado);
    const disabled = stockDisponible <= 0; // Si no queda stock entonces deshabilita este componente

    const [contador, setContador] = React.useState(disabled?0:initial); // Si no queda stock entonces el contador es 0


    //Funciones
    const agregarUno = () => {
        (contador < stockDisponible) && setContador(contador + 1); // Si agregas una cantidad menor que el stock disponible, entonces puedes agregar uno más
    };

    const quitarUno = () => {
        (contador > 1) && setContador(contador - 1); // Si quitas una cantidad mayor a cero, entonces puedes restar uno menos
    };

    const onBuy = () => {
        if (disabled) return; // Si no hay stock, no se puede comprar

        onAdd(contador); // Si hay stock, entonces se puede comprar
        if (contador === stockDisponible) {  // Y determinamos en que valor quedó el contador
            onDisabledCounter();
            setContador(0);
        } else {
            setContador(1);
        }
    }

    return (
        <div className="centrarTodo">
            <Minus accion={quitarUno}/>
            <span>{contador}</span>
            <Plus accion={agregarUno}/>
            <button onClick={onBuy} className="btn btn-primary" disabled={disabled}>{disabled?"Máximo agregado":buttonText}</button>
        </div>
    );
}

export default ItemCount;