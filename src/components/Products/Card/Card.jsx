import React from 'react';
import "./Card.css";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

function Card({product}) {
    return (
        <div className="col-xl-3 col-lg-4 col-12">
            <div className="card tarjeta">
                <CardImage id={product.id} title={product.title} img={product.img}/>
                <CardBody product={product} />
            </div>
        </div>
    )
}

export default Card