import productosMolderia from "../../productos"
import Itemlist from "./Itemlist"
import "../../App.css"

function ItemListContainer() {
  return (
    <div id='container-productos'>
      {productosMolderia.map(productos=>(<Itemlist key={productos.id}{...productos}/>))}
    </div>
  )
}

export default ItemListContainer