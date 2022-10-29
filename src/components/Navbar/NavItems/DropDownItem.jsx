import {Link} from "react-router-dom";

export default function DropDownItem({category}){
  return(
    <li>
      <Link className="dropdown-item" to={`/category/${category}`}>
        {category}
      </Link>
    </li>
  );
}