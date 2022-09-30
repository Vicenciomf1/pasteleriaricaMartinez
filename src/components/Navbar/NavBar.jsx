import CartWidget from "../Icons/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {traerCategorias} from "../../services/asyncMockAPI";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        traerCategorias().then((categoriasDeAPI) => setCategories([...new Set(categoriasDeAPI)]));
    }, []);
    console.log(categories);
    return (
        <nav className="navbar navbar-light navbar-expand-md py-1">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/assets/img/Pasteleria.svg" alt="logo" className="logo"/>
                    <span>Pastelería Rica</span>
                </Link>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3">
                    <span className="visually-hidden">Abrir menú</span> {/*Por si es que no se muestra la hamburguesa*/}
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-3">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-auto">
                            <Link className="nav-link active" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item mx-auto dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorías
                            </Link>
                            {
                                categories.map((categoria, key) => {
                                    return (
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"
                                            key={key}>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to={`/category/${categoria.name}`}
                                                >
                                                    {categoria.name}
                                                </Link>
                                            </li>
                                        </ul>
                                    );
                                })
                            }
                        </li>
                        <li className="nav-item mx-auto">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary me-5" type="button">Iniciar sesión</button>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


