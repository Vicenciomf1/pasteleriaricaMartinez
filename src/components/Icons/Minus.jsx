import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const Minus = ({accion}) => {
    // La acción será lo que se ejecute cuando se haga click en el ícono, en este caso es una resta, pero lo dejo como acción para que sea más escalable
    return (
        <>
            <FontAwesomeIcon icon={faMinus} onClick={accion}/>
        </>
    );
}

export default Minus;