import React, {useState, useEffect} from 'react'
import {traerUnProducto} from '../../services/AsyncMockAPI';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting: saludo}) => {
    const [unProducto, setUnProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const idParseado = parseInt(useParams().itemId); // Esto es para que el ID sea un número y no una string (lo hago desde el principio para evitar errores si lo reutilizo), obtengo el diccionario de query params, luego saco el item id, y finalmente lo parseo

    useEffect(() => {
        traerUnProducto(idParseado).then((productoDeAPI) => {
            setUnProducto(productoDeAPI);
            setLoading(false);
        });
    }, [idParseado]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">{saludo}</h1>
                    {
                        loading ?
                            <h2 className="text-center">Cargando...</h2>
                            :
                            <ItemDetail productoUnico={unProducto}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;