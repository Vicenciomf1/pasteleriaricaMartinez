import React, {useState, useEffect} from 'react'
import {traerUnProducto} from '../../services/Firestore';
import ItemDetail from './ItemDetail';
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [unProducto, setUnProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const idStringProducto = useParams().itemId;

    useEffect(() => {
        traerUnProducto(idStringProducto).then((productoDeAPI) => {
            (productoDeAPI.title === undefined) ? setNotFound(true) : setUnProducto(productoDeAPI);
            setLoading(false);
        });
    }, [idStringProducto]);

    if (notFound) { return <h1 className="text-center fs-1 my-5">Producto no encontrado, revisa la URL</h1>  }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        loading ?
                            <h2 className="text-center">Cargando...</h2>
                            :
                            <ItemDetail productoUnico={unProducto} saludo={greeting} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;