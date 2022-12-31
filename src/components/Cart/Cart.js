import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import'../Cart/Cart.css'
import'../Cart/CartContent.css'
import { Link } from "react-router-dom"
const Cart = ()=>{
    const {cart,removeItem,getTotal} = useContext(CartContext)

    const total = getTotal()
return(
    <div className="Cart">
        <h1>cart</h1>
        {
            cart.map(prod =>{
                return(
                    <div key={prod.id} className='CartContent'>

                        <img src={prod.img} alt={prod.nombre} />  
                        <h2>{prod.nombre} x({prod.quanty} )</h2>
                        <button onClick={()=> removeItem(prod.id)}>remove</button>
                        <h2>${prod.price * prod.quanty}</h2>
                       
                    </div>
                )
            })
        }
        <h3>Total: ${total} </h3>
        <Link to={'/chekout'}>
        <button>
            Chekout
        </button>
        </Link>
    </div>
)
}

export default Cart