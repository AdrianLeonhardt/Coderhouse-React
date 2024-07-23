import React, { useState } from 'react';
function ItemCount() {
    const [count, SetCount] = useState(0); // Estado para almacenar la cantidad de ítems
    const stock = 10; // Stock disponible

// Función para incrementar la cantidad
  const increment = () => {
    if (count < stock) {
      SetCount(prevCount => prevCount + 1);
    }
  };

// Función para decrementar la cantidad, evitando que sea menor que 0
  const decrement = () => {
    if (count > 0) {
      SetCount(prevCount => prevCount - 1);
    }
  };

  // Función para manejar el click en el botón de añadir al carrito
  const addToCart = () => {
    if (count > 0) { // Verifica que haya al menos 1 ítem seleccionado
        alert(`Añadir al carrito: ${count} ítems`);
      } else {
        alert('Debe seleccionar al menos 1 ítem'); 
      }
    };

  return (
    <div>
      <h1>Actividad 1</h1>
      <div>
        <h2>Productos: {count}</h2>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount