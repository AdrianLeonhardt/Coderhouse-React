import React from 'react'
import { Link } from 'react-router-dom'

function Itemlist({id, imagen ,nombre, precio}) {
  return (
    <Link to={`/productos/${id}`} className='card'>
        <img src={imagen}/>
        <h2>{nombre}</h2>
        <h2>${precio}</h2>
    </Link>
  )
}

export default Itemlist