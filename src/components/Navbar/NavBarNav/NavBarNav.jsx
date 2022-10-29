import {useEffect, useState} from "react";
import {traerProductos} from "../../../services/Firestore";
import {Link} from "react-router-dom";
import NavBarNavItem from "../NavItems/NavBarNavItem";
import DropDownItem from "../NavItems/DropDownItem";

export default function NavBarNav(){  // ¿Hay alguna manera más fácil? → Debería de poder llamar una sola vez a todos los productos y guardarlos en caché
  const [categorias, setCategorias] = useState([]);
  //Podemos usar un spinner también, o un esqueleto mientras cargan las categorías

  useEffect( () => {  // Usar client-side cache para fetch, si no, es insostenible
    traerProductos().then( (prod) => {
      let mapeadas = prod.map(({category})=>category);  // Saco las categorías
      let mapeadas_set = new Set(mapeadas);  // Elimino las repetidas
      let noRepetidas = [...mapeadas_set];  // La convierto a un array para mapear

      const categoriasFetch = noRepetidas.map( category => <DropDownItem key={category} category={category}/> ); //Las mapeo en nodos JSX
      setCategorias(categoriasFetch);  // Setteo esos nodos
    });
  }, []);

  return(
    <ul className="navbar-nav mx-auto">
      <NavBarNavItem active={true}>Inicio</NavBarNavItem>
      <li className="nav-item mx-auto dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {categorias}
        </ul>
      </li>
      <NavBarNavItem>Contacto</NavBarNavItem>
    </ul>
  );
}