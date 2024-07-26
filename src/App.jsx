import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Contactos from './pages/Contactos';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navbar/>}> 
            <Route index element={<Inicio/>}/>
            <Route path='servicios' element={<Servicios/>}/>
            <Route path='productos' element={<Productos/>}/>
            <Route path='contacto' element={<Contactos/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App
