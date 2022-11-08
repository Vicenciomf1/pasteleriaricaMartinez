import React from 'react';
import "./Item.css";
import ItemImage from "./ItemImage";
import ItemBody from "./ItemBody";

function Item({product}) {
    return (
        <div className="col-xl-3 col-lg-4 col-12 mx-3">
            <div className="card tarjeta">
                <ItemImage id={product.id} title={product.title} img={product.img}/>
                <ItemBody product={product} />
            </div>
        </div>
    )
}

export default Item