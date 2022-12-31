import '../NavBar/navbar.css'
import '../CartWidget/cartwidget.css'
import logo from '../../assets/logodronefinal.png' 
import Button from '../Button/button'
import CartWidget from '../CartWidget/cartwidget'

import { Link } from "react-router-dom"

const NavCont = () =>{



    return(

   
   
   
    <nav className="navegador">
        
        <Link to='/'> <div className='logo' > <img src={logo}/> </div></Link>

        <Link to='/'> <Button colorText='black' backgroundText='#F24B08' >HOME</Button> </Link>
       <Link to='/category/cheap'> <Button colorText='black' backgroundText='#F24B08' >CHEAP DRONES</Button> </Link> 
    <Link to='/category/expensive'> <Button colorText='black' backgroundText='#F24B08' >EXPENSIVE DRONES</Button> </Link>
        
        <div className='carrito'> <CartWidget/> </div>

        

    </nav>
    
    


    
    
    )

}

export default NavCont