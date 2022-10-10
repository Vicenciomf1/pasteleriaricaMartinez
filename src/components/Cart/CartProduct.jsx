import React from 'react';

function CartProduct({ product, onDeleteHandler }) {
    const { title, price, quantity, id } = product;
    return (
        <tr>
            <td className="text-center">{title}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">${price}</td>
            <td className="text-center me-5">${price * quantity}</td>
            <td className="d-flex justify-content-center">
                <button className="btn btn-outline-danger btn-sm" onClick={()=>onDeleteHandler(id)}>X</button>
            </td>
        </tr>
    );
}

export default CartProduct;