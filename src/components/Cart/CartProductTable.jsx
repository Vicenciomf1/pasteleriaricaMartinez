import React from "react";
import CartProduct from "./CartProduct";

export default function TablaProductos({obtenerPrecioTotal, productos, onDeleteHandler}) {

  return(
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
        <tr>
          <th className="text-center">Producto</th>
          <th className="text-center">Cantidad</th>
          <th className="text-center">Valor Unitario</th>
          <th className="text-center">Importe total</th>
          <th className="text-center">Eliminar</th>
        </tr>
        </thead>
        <tbody>
        {
          productos.map((product) => (
            <CartProduct key={product.id} product={product} onDeleteHandler={onDeleteHandler} />
          ))
        }
        </tbody>
        <tfoot className="table-group-divider">
        <tr>
          <td colSpan="4" className="text-end">Total</td>
          <td className="text-center">{obtenerPrecioTotal()}</td>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}

