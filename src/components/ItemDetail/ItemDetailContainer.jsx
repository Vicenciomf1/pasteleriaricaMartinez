import React, { useState, useEffect } from 'react'
import { traerUnProducto } from '../../services/asyncMockAPI';
import ItemDetail from './ItemDetail';

const ItemListContainer = ({ greeting: saludo }) => {
    const [unProducto, setUnProducto] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerUnProducto(2).then((productoDeAPI) => {
            setUnProducto(productoDeAPI);
            setLoading(false);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">{saludo}</h1>
                    {loading ? <h2 className="text-center">Cargando...</h2> : <ItemDetail productoUnico={unProducto} />}
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;