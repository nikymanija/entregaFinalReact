import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import { Link } from "react-router-dom"

const CartWidget = ()=>{
    const {getQuantity} = useContext(CartContext)

    const totalQuantity = getQuantity()

    return(
       <Link to='/cart'>
        <button>
            <img src={'./assets/cart.png'} alt='cart-widget'/>
            <p>{totalQuantity}</p>
        </button>
        </Link>
    )
    

}
export default CartWidget