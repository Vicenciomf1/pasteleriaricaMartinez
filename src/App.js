import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from "./context/CartContext";
//import {traerProductos, traerPorCategoria, traerPorMayorQuePrecio, traerPorMenorQuePrecio, traerIgualQuePrecio, traerProducto} from "./services/Firestore";

function App() {
    //console.log(traerProducto("RFFZMXhPu7X3373dGczL").then(resp=>console.log(resp)));
    //console.log(traerProductos().then(resp=>console.log(resp)));
    //console.log(traerProductos().then(resp=>console.log(resp)));
    //console.log(traerPorCategoria("Dulces").then(resp=>console.log(resp)));
    //console.log(traerPorMayorQuePrecio(6000).then(resp=>console.log(resp)));
    //console.log(traerPorMenorQuePrecio(6000).then(resp=>console.log(resp)));
    //console.log(traerIgualQuePrecio(5500).then(resp=>console.log(resp)));

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
