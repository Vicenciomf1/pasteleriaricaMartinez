import React from 'react'
import Card from './Card';

function ItemList({productosDeContainer: productos}) {
    return (
        <div className="container">
            <div className="row">
                {
                    productos.map((product) => {
                        return (
                            <Card
                                key={product.id}
                                product={product}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ItemList