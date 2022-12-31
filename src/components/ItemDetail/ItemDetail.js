
import { useContext, useState } from "react";

import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({id,nombre,img,description,price,stock})=>{
  
     //const [quantity,setQuantity]=useState(0) 

    const {addItem,isInCart} = useContext(CartContext)




    const handleOnAdd = (quanty)=>{

        addItem({id,nombre,price,quanty,img,description})
      //setQuantity(quantity) 
    }

    return(
        <div>
              
        <img src={img} alt={nombre} />   
        <h1>{nombre}</h1>  
        <p>{description}</p>  
        <h2>${price}</h2> 
        <p>Stock: {stock}</p>
     {/*    <ItemCount stock={stock} onAdd={handleOnAdd}/>     */}
        {
           isInCart(id)
            ? <Link to='/cart'> <button>Terminar Compra</button></Link>
            : stock > 0
            ? <ItemCount stock={stock} onAdd={handleOnAdd}/> 
            : <h2>No hay stock</h2>
        }
   </div>

    )
}

export default ItemDetail