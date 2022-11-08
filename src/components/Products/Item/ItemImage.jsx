import {Link} from "react-router-dom";
import React from "react";

function ItemImage({id, title, img}) {
  return(
    <Link to={`/item/${id}`}>
      <img
        title={`Ir al detalle de ${title}`}
        src={img}
        className="card-img-top"
        alt={`Una foto de un/a ${title} que lleva hacia su detalle`}
      />
    </Link>
  );
}

export default ItemImage;