import './App.css'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>}/>

        <Route path="/category/:categoryId" element={<ItemListContainer/>} />

        <Route path="/item/:id" element={<ItemDetailContainer/>}/>

      </Routes>

      
    </BrowserRouter>
  );
}

export default App
