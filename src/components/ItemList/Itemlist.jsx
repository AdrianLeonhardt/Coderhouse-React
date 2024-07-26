import React from 'react'

function Itemlist({nombre, precio}) {
  return (
    <div className='card'>
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
    </div>
  )
}

export default Itemlist