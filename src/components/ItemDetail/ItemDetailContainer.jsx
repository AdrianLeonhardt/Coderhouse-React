import { useEffect, useState } from "react"
import datafilter from "../../funciones/datafilter";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    
    useEffect(() => {
        datafilter(Number(id))
            .then((res)=> {
                setItem(res);
            })
    },[id])
    
    
    return (
    <div className="item-detail-container">
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer