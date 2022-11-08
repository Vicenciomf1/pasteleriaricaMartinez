import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useCartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const { getTotalItemsInCart } = useCartContext();
    const cantidad = getTotalItemsInCart();

    return (
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} size="xl"/>
                {cantidad > 0 && <span className="badge rounded-pill bg-secondary">{cantidad}</span>}
            </Link>
        </div>
    );
}

export default CartWidget;
