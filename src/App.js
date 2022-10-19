import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from "./context/CartContext";
import Checkout from "./components/CheckoutComponents/Checkout/Checkout";
//import {traerProductos, traerPorCategoria, traerProducto, traerPorCategoriaYRangoDePrecios} from "./services/Firestore";

function App() {
    //console.log(traerProducto("RFFZMXhPu7X3373dGczL").then(resp=>console.log(resp)));
    //console.log(traerPorCategoriaYRangoDePrecios(["Tortas", 5000, 8000]).then(resp=>console.log(resp)));  // Yay! Funciona!
    // Sólo faltaría hacer que si no ingresas un valor de categoría en la función "traerPorCategoriaYRangoDePrecios" entonces sea cualquier categoría, y que por defecto el límite bajo sea 0, y el mayor sea el precio más alto.
    return (
        <CartContextProvider>
            <BrowserRouter>
                <section>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={
                            <ItemListContainer greeting="Bienvenid@ a la tienda!"/>
                        }/>
                        <Route path="/category/:categoryName" element={
                            <ItemListContainer greeting="Bienvenid@ a la tienda desde alguna categoría!"/>
                        }/>
                        <Route path="/item/:itemId" element={
                            <ItemDetailContainer greeting="Bienvenid@ al detalle de este producto!"/>
                        }/>
                        <Route path="/cart" element={
                            <Cart/>
                        }/>
                        <Route path="/checkout/:orderId" element={
                            <Checkout />
                        } />
                        <Route path="*" element={
                            <h1>Vaya, esto es vergonzoso... <br/> Acabas de encontrar un lugar que no teníamos pensado</h1>
                        }/>
                    </Routes>
                </section>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
