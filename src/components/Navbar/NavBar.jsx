import CartWidget from "../Icons/CartWidget";
import "./NavBar.css";
import Logo from "./NavBarIcons/Logo";
import CollapseIcon from "./NavBarIcons/CollapseIcon";
import NavBarNav from "./NavBarNav/NavBarNav";


export default function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md py-1">
            <div className="container">
                <Logo />
                <CollapseIcon />

                <div className="collapse navbar-collapse" id="navcol-3">
                    <NavBarNav />
                    <NavBarRightItems />
                </div>
            </div>
        </nav>
    );
}

function NavBarRightItems(){
  return(
    <div className="d-flex justify-content-sm-center justify-content-lg-around align-items-center">
      <button className="btn btn-primary me-5" type="button">Iniciar sesión</button>
      <CartWidget/>
    </div>
  );
}









