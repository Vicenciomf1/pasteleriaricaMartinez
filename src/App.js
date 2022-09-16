import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <section>
      <NavBar />
      <ItemListContainer greeting="Bienvenid@ a la tienda!"/>
    </section>
  );
}

export default App;
