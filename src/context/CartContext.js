import React, { createContext, useState, useContext } from "react";

const cartContext = createContext({});
export const useCartContext = () => useContext(cartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) || []);


    //Agregar producto al carrito
    function addItem(item, quantity){
        let newCart = [...cart];
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===item.id );

        (idEnArrayCarro === -1) ? newCart.push({...item, quantity: quantity}) : newCart[idEnArrayCarro].quantity += quantity;

        setCart(newCart);
        localStorage.setItem('carrito', JSON.stringify(newCart));
    }

    //Consultar total de productos en el carrito
    function getTotalItemsInCart(){
        return cart.reduce( (acumulador, {quantity}) => acumulador+quantity, 0);  // Tomas la cantidad del objeto actual y lo vas sumando al acumulador
    }

    //Consultar precio total del carrito
    function getTotalPrice(){
        return cart.reduce( (acumulador, {quantity, price}) => acumulador+(quantity*price), 0);
    }

    //Eliminar producto del carrito
    function removeItem(idItem){
        let newCart = [...cart];
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===idItem );

        if (idEnArrayCarro !== -1){
            newCart.splice(idEnArrayCarro, 1);
            setCart(newCart);
            localStorage.setItem('carrito', JSON.stringify(newCart));
        } else {
            console.log("No se encontró el producto en el carrito o el id ingresado no es válido, por lo que no se puede eliminar, ¿cómo llegaste a esta parte? jaja");
        }
    }

    //Vaciar carrito
    function clear(){
        setCart([]);
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    //Consultar la cantidad de un producto en específico
    function getItemQty(idItem){
        let idEnArrayCarro = cart.findIndex( (producto) => producto.id===idItem );
        return (idEnArrayCarro === -1) ? 0 : cart[idEnArrayCarro].quantity;
    }

    return(
       <cartContext.Provider value={
           {
                cart,
                addItem,
                getTotalItemsInCart,
                removeItem,
                clear,
                getTotalPrice,
                getItemQty
           }
       }>
           {children}
       </cartContext.Provider>
    );
}