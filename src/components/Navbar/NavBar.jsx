import CartWidget from "../Icons/CartWidget";
import "./NavBar.css";
import Logo from "./NavBarIcons/Logo";
import CollapseIcon from "./NavBarIcons/CollapseIcon";
import {Link} from "react-router-dom";
import NavBarNavCategories from "./NavBarNavCategories";


export default function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md py-1">
            <div className="container">
                <Logo />
                <CollapseIcon />

                <div className="collapse navbar-collapse" id="navcol-3">
                    <NavBarNav />
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

function NavBarNav(){
    return(
      <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
              <Link className="nav-link active" to="/">Inicio</Link>
          </li>
          <NavBarNavCategories />
      </ul>
    );
}









