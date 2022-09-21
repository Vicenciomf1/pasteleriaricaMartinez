import React from 'react'
import Card from "./Card";

const ItemListContainer = ({ greeting: saludo }) => {
    let products = [
        {
            title: "Küchen del sur",
            img: "/assets/img/kuchen.webp",
            detail: "Este dulce fue hecho con mucho cariño",
            price: 5500,
            stock: 10
        }
    ];
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">{saludo}</h1>
                    <Card producto={products[0]}/>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;