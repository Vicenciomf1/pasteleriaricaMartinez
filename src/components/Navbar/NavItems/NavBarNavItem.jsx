import {Link} from "react-router-dom";

export default function NavBarNavItem({children, active=false}){
  return(
    <li className="nav-item mx-auto">
      <Link className={`nav-link ${active && "active"}`} to="/">{children}</Link>
    </li>
  );
}