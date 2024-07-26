import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route index element={<ItemListContainer saludo="Inicio"/>}/>
          
        </Routes>

      </BrowserRouter>
  );
}

export default App
