import React, { createContext, useState, useContext } from "react";

const cartContext = createContext({});
export const useCartContext = () => useContext(cartContext); // Esto es un custom Hook, que nos permite usar el contexto de cartContext en cualquier componente que lo necesite sin tener que importar el useContext(EsteContexto) y el contexto a la vez.

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
    
    function removeItem(idItem){
        let newCart = [...cart];  // ¡Mucho ojo! Que sin el spread estás apuntando al estado, ¡no generando una copia! Esto está malo: "let newCart = cart;", esto está bueno: "let newCart = [...cart];"
        let idEnArrayCarro = newCart.findIndex( (producto) => producto.id===idItem );

        if (idEnArrayCarro !== -1){
            newCart.splice(idEnArrayCarro, 1);
            setCart(newCart);
            localStorage.setItem('carrito', JSON.stringify(newCart));
        } else {
            console.log("No se encontró el producto en el carrito o el id ingresado no es válido, por lo que no se puede eliminar, ¿cómo llegaste a esta parte? jaja");
        }
        //También se puede un filter, pero no me gusta tanto, sería algo así: setCart(cart.filter( (producto) => producto.id !== idItem ));, es decir, cualquiera que no sea tal id, lo deja en el carrito
        //En realidad también es válido el uso del filter, ya que no es destructivo
    }

    function clear(){
        setCart([]);
        localStorage.setItem('carrito', JSON.stringify([]));
    }

    //Consultar la cantidad de un producto en específico, no lo necesito, ya que mi componente de producto en carro ya lo hace
    function getItemQty(idItem){
        let idEnArrayCarro = cart.findIndex( (producto) => producto.id===idItem );
        return (idEnArrayCarro === -1) ? 0 : cart[idEnArrayCarro].quantity;
    }

    function isInCart (idItem) {
        return cart.some((producto) => producto.id === idItem);
    }

    /*
    Métodos que no me sirvieron, que dejo acá por si los llego a necesitar, borrar el comentario al hacer la entrega real, recuerda que es mala práctica poner este tipo de comentarios

    //Consultar el precio total de un producto en específico, es decir, sacando el subtotal del precio y cuántos compraste; no lo necesito, ya que hago el cálculo en mi componente de producto en carro
    function getItemPrice(idItem){
        let {quantity, price} = cart.find( (producto) => producto.id===idItem );
        return quantity*price;
    }
    */

    return(
       <cartContext.Provider value={
           {
                cart,
                addItem,
                getTotalItemsInCart,
                removeItem,
                clear,
                isInCart,
                getTotalPrice,
                getItemQty
           }
       }>
           {children}
       </cartContext.Provider>
    );
}