import productosMolderia from "../../productos"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const {id} = useParams();

    const productos = productosMolderia.find(productos => productos.id === parseInt(id));

    if(!productos){
      return <h2>El producto no existe</h2>
    }

  return (
    <div>
      <h2>Detalle del producto</h2>
      <h2>{productos.nombre}</h2>
      <p>{productos.descripcion}</p>
      <h3>{productos.precio}</h3>
    </div>
  )
}

export default ItemDetailContainer