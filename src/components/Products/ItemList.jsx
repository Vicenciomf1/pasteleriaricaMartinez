import React from 'react'
import Item from './Item/Item';

function ItemList({productosDeContainer: productos}) {
    return (
        <div className="container">
            <div className="row g-5">
                {
                    productos.map((product) => {
                        return (
                            <Item
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