import {Link} from "react-router-dom";

export default function Logo(){
  return(
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img src="/assets/img/Pasteleria.svg" alt="logo" className="logo"/>
      <span>Pastelería Rica</span>
    </Link>
  );
}