import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md py-1">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="src/components/Navbar/NavBar#">
                    <img src="/assets/Pasteleria.svg" alt="logo" className="logo"/>
                    <span>Pastelería Rica</span>
                </a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3">
                    <span className="visually-hidden">Abrir menú</span> {/*Por si es que no se muestra la hamburguesa*/}
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-3">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-auto">
                            <a className="nav-link active" href="src/components/Navbar/NavBar#">Inicio</a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="src/components/Navbar/NavBar#">Productos</a>
                        </li>
                        <li className="nav-item mx-auto">
                            <a className="nav-link" href="src/components/Navbar/NavBar#">Contacto</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary" type="button">Iniciar sesión</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


