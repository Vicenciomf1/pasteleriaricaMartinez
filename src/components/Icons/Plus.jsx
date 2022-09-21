import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Plus = ({accion}) => {
    // La acción será lo que se ejecute cuando se haga click en el ícono, en este caso es una suma, pero lo dejo como acción para que sea más escalable
    return (
        <>
            <FontAwesomeIcon icon={faPlus} onClick={accion}/>
        </>
    );
}

export default Plus;