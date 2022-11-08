import {useEffect, useState} from "react";
import {traerProductos} from "../../services/Firestore";
import {Link} from "react-router-dom";


export default function NavBarNavCategories(){
  const [categorias, setCategorias] = useState([]);

  useEffect( () => {
    traerProductos().then( (prod) => {
      let mapeadas = prod.map(({category})=>category);  // Saco las categorías
      let mapeadas_set = new Set(mapeadas);  // Elimino las repetidas
      let noRepetidas = [...mapeadas_set];  // La convierto a un array para mapear

      const categoriasFetch = noRepetidas.map( category => <DropDownItem key={category} category={category}/> ); //Las mapeo en nodos JSX
      setCategorias(categoriasFetch);  // Setteo esos nodos
    });
  }, []);

  return(
    <li className="nav-item mx-auto dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Productos
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {categorias}
      </ul>
    </li>
  );
}

function DropDownItem({category}){
  return(
    <li>
      <Link className="dropdown-item" to={`/category/${category}`}>
        {category}
      </Link>
    </li>
  );
}