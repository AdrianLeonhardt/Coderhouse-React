import { useEffect, useState } from "react";
import alldata from "../../funciones/alldata.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();
 
    useEffect(()=> {
        alldata()
            .then((res)=>{
                if (categoryId) {
                    setProductos(res.filter((prod)=> prod.categoria === categoryId));
                }else {
                    setProductos(res);
                }
                
            })
    }), [categoryId]
  
    return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer