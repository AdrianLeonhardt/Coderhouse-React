import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const[itemInfo, setItemInfo] = useState(null);
//Si esta el array al final se renderiza una vez, sino no
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/10")
          .then (respuesta => {
            if (!respuesta.ok) {
                throw new Error("No pudimos traer la informacion")
            }
            return respuesta.json();
          })
          .then(data => setItemInfo(data))
          .catch(error => console.error("Encontramos un error:",error))
    },[])

  return (
    <>
      <h2>Detalle del producto</h2>
      {itemInfo && <ItemDetail item = {itemInfo}/>}
    </>
  )
}

export default ItemDetailContainer