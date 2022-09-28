import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <section>
      <NavBar />
      {/* <ItemListContainer greeting="Bienvenid@ a la tienda!"/> */}
      <ItemDetailContainer greeting="Bienvenid@ al detalle de este producto!"/>
    </section>
  );
}

export default App;
