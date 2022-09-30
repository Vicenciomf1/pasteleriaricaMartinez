import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

function Card({productoUnico}) {
    let {title, img, detail, price, stock, category} = productoUnico;
    return (
        <div className="col-12">
            <div className="card mx-auto" style={{width: "40rem"}}>
                <img src={img} className="card-img-top" alt={`Una foto de un/a ${title}`}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {detail} <br/>
                        Por si acaso, su categoría es de los/las {category} <br/>
                        Precio: ${price} <br/>
                        Stock disponible: {stock}
                    </p>
                    <ItemCount buttonText={"Comprar ahora"} initial={1} stock={stock}
                               onAdd={(cantidad) => alert(`Has comprado ${cantidad} ${title}/es/as`)}/>
                </div>
            </div>
        </div>
    )
}

export default Card