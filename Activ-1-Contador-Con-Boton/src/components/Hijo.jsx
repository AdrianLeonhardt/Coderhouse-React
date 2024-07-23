

//Sin Desestructurar (Props = Objeto)
/*function Hijo(props) {
  return (
    <>
    <h1>Basico</h1>
    <h2>Hola {props.nombre}</h2>
    <h2>Edad {props.edad}</h2>
    </>
  )
}*/

//Desestructurado
function Hijo({nombre,edad}) {
    return (
        <>
        <h2>Hola {nombre}</h2>
        <h2>Edad {edad}</h2>
        </>
    )
}

export default Hijo