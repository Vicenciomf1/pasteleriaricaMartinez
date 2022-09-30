import React from 'react';
import Minus from "../Icons/Minus";
import Plus from "../Icons/Plus";
import "./ItemCount.css";

function ItemCount({initial, stock, onAdd, buttonText}) {
    const [contador, setContador] = React.useState(initial);

    const agregarUno = () => {
        (contador < stock) && setContador(contador + 1); // Si compras una cantidad menor que el stock, entonces puedes agregar uno más
    };
    const quitarUno = () => {
        (contador > 0) && setContador(contador - 1); // Si compras una cantidad mayor a cero, entonces puedes restar uno menos
    };

    const comprar = () => {
        (contador <= stock) ? onAdd(contador) : alert("Acabas de hackear mi app, no deberías de poder comprar más de lo que hay en stock, por favor avísame si es que llegaste acá"); // Si compras una cantidad menor o igual al stock, entonces puedes comprar, si no, te pregunto qué es lo que hiciste jaja
        // Cuando compras, se ejecuta la función onAdd, que es la que se define en el componente padre, realmente no le encontré sentido, y me costó entender qué pedían
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