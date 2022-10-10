import React from 'react';
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import "./ItemCount.css";
import {useCartContext} from "../../context/CartContext";


function ItemCount({initial, stock, onAdd, buttonText, idComprado, handleDisabledChild}) {
    //Props desde contexto
    const {getItemQty} = useCartContext(); // Todas las que son propias del componente al montarse, que no cambiarán de manera interna, serán por props y variables derivadas de estas

    //Estados
    const [stockDisponible, setStockDisponible] = React.useState(stock - getItemQty(idComprado)); // El stock disponible es el stock inicial menos lo que ya se compró
    const [disabled, setDisabled] = React.useState(stockDisponible <= 0);  // Si no queda stock entonces deshabilita este componente
    const [contador, setContador] = React.useState(initial); // Si no queda stock entonces el contador es 0

    //Funciones
    const onDisable = () => {
        setDisabled(true);
        setContador(0);
        handleDisabledChild();
    }

    const agregarUno = () => {
        (contador < stockDisponible) && setContador(contador + 1); // Si agregas una cantidad menor que el stock disponible, entonces puedes agregar uno más
    };

    const quitarUno = () => {
        (contador > 0) && setContador(contador - 1); // Si quitas una cantidad mayor a cero, entonces puedes restar uno menos
    };

    const comprar = () => {
        if (contador <= stockDisponible) {  // Si quedan productos, entonces deja comprar, sea comprarlos todos o compramos menos que todos los que quedan
            onAdd(contador);
            setStockDisponible(stockDisponible - contador);
        } else {
            alert("Acabas de hackear mi app, no deberías de poder comprar más de lo que hay en stock, por favor avísame si es que llegaste acá"); // Si compras una cantidad menor o igual al stock, entonces puedes comprar, si no, te pregunto qué es lo que hiciste jaja
        }
    };

    //Pd: Esto es manejo avanzado de estado en donde el valor de uno afecta al otro, debo de aprender el hook useReducer para manejar esto mejor, o aprender Redux.
    React.useEffect(() => { // ¿Algo importante es que React vuelve a renderizar este efecto antes de que lo mande a tu DOM Real??
        if (stockDisponible===0) {
            onDisable();  // Si no quedan productos luego de esta compra, entonces deshabilita el componente
        } else {
            setContador(1); // Si el componente está desactivado, entonces te setea el valor por defecto del contador en 0
        }
    }, [stockDisponible]);

    return (
        <div className="centrarTodo">
            <Minus accion={quitarUno}/>
            <span>{contador}</span>
            <Plus accion={agregarUno}/>
            <button onClick={comprar} className="btn btn-primary" disabled={disabled}>{disabled?"Máximo agregado":buttonText}</button>
        </div>
    );
}

export default ItemCount;