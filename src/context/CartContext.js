import React, { createContext, useState } from "react";

export const cartContext = createContext({});

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

    //Unitarios, se enfocan en un item en particular, sea agregándolo, modificándolo o consultando información

    //Agregar productos al carrito
    function addItem(item, quantity){
        let newCart = [...cart];
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===item.id );

        (idEnArrayCarro === -1) ? newCart.push({...item, quantity: quantity}) : newCart[idEnArrayCarro].quantity += quantity;

        setCart(newCart);
        localStorage.setItem('carrito', JSON.stringify(newCart));
    }

    //Consultas:
    //Consultar total de productos en el carrito
    function getTotalItemsInCart(){
        return cart.reduce( (acumulador, {quantity}) => acumulador+quantity, 0);  // Tomas la cantidad del objeto actual y lo vas sumando al acumulador
    }

    //Consultar precio total del carrito
    function getTotalPrice(){
        return cart.reduce( (acumulador, {quantity, price}) => acumulador+(quantity*price), 0);
    }

    //Consultar la cantidad de un producto en específico
    function getItemQty(idItem){
        let idEnArrayCarro = cart.findIndex( (producto) => producto.id===idItem );
        return (idEnArrayCarro === -1) ? 0 : cart[idEnArrayCarro].quantity;
    }

    //Consultar el precio total de un producto en específico, es decir, sacando el subtotal del precio y cuántos compraste
    function getItemPrice(idItem){
        let {quantity, price} = cart.find( (producto) => producto.id===idItem );
        return quantity*price;
    }
    
    function removeItem(idItem){
        let newCart = [...cart];  // Mucho ojo! Que sin el spread estás apuntando al estado, no generando una copia!! Esto está malo: "let newCart = cart;", esto está bueno: "let newCart = [...cart];"
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===idItem );

        if (idEnArrayCarro !== -1){
            newCart.splice(idEnArrayCarro, 1);
            setCart(newCart);
            localStorage.setItem('carrito', JSON.stringify(newCart));
        } else {
            console.log("No se encontró el producto en el carrito, por lo que no se puede eliminar, ¿cómo llegaste a esta parte? jaja");
        }
        //También se puede un filter, pero no me gusta tanto, sería algo así: setCart(cart.filter( (producto) => producto.id !== idItem ));, es decir, cualquiera que no sea tal id, lo deja en el carrito
        //En realidad también es válido el uso del filter, ya que no es destructivo
    }

    function clear(){
        setCart([]);
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    function isInCart (idItem){
        return cart.some( (producto) => producto.id===idItem );
    }

    return(
       <cartContext.Provider value={
           {
                cart,
                addItem,
                getTotalItemsInCart,
                removeItem,
                clear,
                isInCart,
                getItemQty,
                getItemPrice,
                getTotalPrice
           }
       }>
           {children}
       </cartContext.Provider>
    );
}