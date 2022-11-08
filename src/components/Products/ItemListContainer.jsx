import React, {useState, useEffect} from 'react'
import {traerProductos, traerProductoPorCategoria} from "../../services/Firestore";
import ItemList from './ItemList';
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting: saludo}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        let ignorar = false;

        setProductos([]);
        setLoading(true);

        if (categoryName) {
            traerProductoPorCategoria(categoryName).then((productosDeAPI) => {
                if (!ignorar) {  // Evita bugs en race conditions
                    setProductos(productosDeAPI);
                    setLoading(false);
                }
            });
        } else {
            traerProductos().then((productosDeAPI) => {
                if (!ignorar) {
                    setProductos(productosDeAPI);
                    setLoading(false);
                }
            });
        }

        return () => {
            ignorar = true;
        };
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