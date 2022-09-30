import React from 'react'
import Card from './Card';

function ItemList({productosDeContainer: productos}) {
    return (
        <div className="container">
            <div className="row">
                {
                    productos.map((producto) => {
                        return (
                            <Card
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                img={producto.img}
                                detail={producto.detail}
                                price={producto.price}
                                stock={producto.stock}
                                category={producto.category}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemList