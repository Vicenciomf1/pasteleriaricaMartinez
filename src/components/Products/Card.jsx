import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

function Card({ title, img, detail, price, stock, category }) {
    return (
        <div className="col-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={`Una foto de un/a ${title}`} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {detail} <br/>
                        Por si acaso, su categoría es de los/las {category} <br/>
                        Precio: ${price}
                    </p>
                    <ItemCount initial={1} stock={stock} onAdd={(cantidad) => alert(`Agregaste uno/a/os/as ${cantidad} ${title}/es/as al carrito`)} />
                </div>
            </div>
        </div>
    )
}

export default Card