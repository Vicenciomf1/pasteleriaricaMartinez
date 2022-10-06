import React, { createContext, useState } from "react";

export const cartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

    function addItem(item, quantity){
        let newCart = [...cart];
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===item.id );


        if (idEnArrayCarro === -1){
            item["quantity"] = quantity;
            newCart.push(item);
        } else {
            newCart[idEnArrayCarro].quantity += quantity;
        }

        setCart(newCart);
        localStorage.setItem('carrito', JSON.stringify(newCart));
    }

    function getTotalItemsInCart(){
        return cart.reduce( (acumulador, actual) => acumulador+actual.quantity, 0);
    }

    function removeItem(itemId){
        let newCart = [...cart];
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===itemId );

        if (idEnArrayCarro !== -1){
            newCart.splice(idEnArrayCarro, 1);
        }

        setCart(newCart);
        localStorage.setItem('carrito', JSON.stringify(newCart));
    }

    function clear(){
        setCart([]);
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    return(
       <cartContext.Provider value={
           {
               cart,
               addItem,
               getTotalItemsInCart,
               removeItem,
               clear
           }
       }>
           {children}
       </cartContext.Provider>
    );
}