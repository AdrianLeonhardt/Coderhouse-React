import { useState, useEffect } from "react";
import { productos } from "./productos";
import '../App.css'


function ItemListContainer() {
    const [data, setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const listaDeProductos = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos)
                },2000)
            })
        }

        listaDeProductos().then((resultado) => {
            setData(resultado);
            setLoading(false);
        })
    },[])

    if(loading) {
        return <div>Cargando...</div>
    }

    console.log(data);

    return (
        <div className="container">
            {data.map((productos)=>(
                <div className="card" key={productos.id}>
                    <h2>{productos.nombre}</h2>
                    <p>{productos.descripcion}</p>
                    <h2>{productos.precio}</h2>
                </div>
            ))}

        </div>
    )

}

export default ItemListContainer