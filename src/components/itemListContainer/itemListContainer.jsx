import React from 'react'

const ItemListContainer = ({ greeting: saludo }) => {
    return (
        <div>
            <h1 className="text-center fs-1 my-5">{saludo}</h1>
        </div>
    );
}

export default ItemListContainer;