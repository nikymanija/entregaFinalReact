import { useState } from "react"
import '../ItemCount/ItemCount.css'
const ItemCount = ({stock, onAdd})=>{
    const [count,setCount] = useState(1)

    const decrement = ()=>{
        if(count>0){
            setCount(prev=>prev -1)
        }

    }
    
    const increment = ()=>{
        if(count < stock){
            setCount(prev=>prev +1)
        }

    }


    return(
        <div className="CarroContador">
            <p>{count}</p>
            <button className="buttonSR" onClick={decrement}>-</button>
            <button className="buttonSR" onClick={increment}>+</button>
            <button className="buttonAdd" onClick={()=>onAdd(count)} disabled={count === 0 }>ADD TO CART</button>
        </div>
    )
}
export default ItemCount