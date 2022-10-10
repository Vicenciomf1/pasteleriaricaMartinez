import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useCartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const { getTotalItemsInCart } = useCartContext();  // Si cambia el carro, cambia el estado del CartContext y de este consumidor, entonces cambiará el getTotalItemsInCart
    const cantidad = getTotalItemsInCart();  // Preferí hacer el render condicional en base solo al badge, no al icono entero por temas de experiencia de usuario (UX).

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
