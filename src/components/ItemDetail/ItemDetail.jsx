import { Link } from 'react-router-dom';

function ItemDetail({item}) {
  return (
    <div className="item-detail">
        <h2>Detalle del Producto</h2>
        <h3>{item.nombre}</h3>
        <img src={item.imagen}/>
        <p>{item.descripcion}</p>
        <h3>${item.precio}</h3>

        <Link to="/" className="back-button">
        Volver a la lista de productos
      </Link>

    </div>
  )
}

export default ItemDetail