import NavBarNavItem from "../NavItems/NavBarNavItem";
import NavBarNavCategories from "../NavItems/NavBarNavCategories";

export default function NavBarNav(){

  return(
    <ul className="navbar-nav mx-auto">
      <NavBarNavItem active={true}>Inicio</NavBarNavItem>
      <NavBarNavCategories />
      <NavBarNavItem>Contacto</NavBarNavItem>
    </ul>
  );
}