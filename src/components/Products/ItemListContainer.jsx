import React, { useState, useEffect } from 'react'
import Card from "./Card";
import { traerProductos } from '../../services/asyncMockAPI';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting: saludo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        traerProductos().then((productosDeAPI) => {
            setProductos(productosDeAPI);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">{saludo}</h1>
                    <ItemList productosDeContainer={productos} />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;