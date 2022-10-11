import CartWidget from "../Icons/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    const categorias = ["Tortas", "Dulces"];
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
                                Productos
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    categorias.map((categoria) => (
                                        <li key={categoria}>
                                            <Link className="dropdown-item" to={`/category/${categoria}`}>
                                                {categoria}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li className="nav-item mx-auto">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-sm-center justify-content-lg-around align-items-center">
                        <button className="btn btn-primary me-5" type="button">Iniciar sesión</button>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


