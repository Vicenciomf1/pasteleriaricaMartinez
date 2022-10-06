import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from "./context/CartContext";

function App() {
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
