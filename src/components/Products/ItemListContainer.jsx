import React, {useState, useEffect} from 'react'
//import {traerPorCategoria, traerProductos} from '../../services/AsyncMockAPI';
import {traerProductos, traerProductoPorCategoria} from "../../services/Firestore";
import ItemList from './ItemList';
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting: saludo}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        setProductos([]);
        setLoading(true);
        if (categoryName) {
            traerProductoPorCategoria(categoryName).then((productosDeAPI) => {
                setProductos(productosDeAPI);
                setLoading(false);
            });
        } else {
            traerProductos().then((productosDeAPI) => {
                setProductos(productosDeAPI);
                setLoading(false);
            });
        }
    }, [categoryName]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center fs-1 my-5">{saludo}</h1>
                    {
                        loading ?
                            <h2 className="text-center">Cargando...</h2>
                            :
                            <ItemList productosDeContainer={productos}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;