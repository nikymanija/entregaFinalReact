import '../ItemList/ItemList.css'

import { Link } from 'react-router-dom'

const ItemList =({products})=>{
    return(
     <div className='ItemList'>


           
{
    

                products.map(prod=>{
                    

                    return(
                        


                       <div key={prod.id}>

                    

                      <img src={prod.img} />   
                    <h2>{prod.nombre}</h2>
                    
                  
                    <p>${prod.price}</p>
                    <Link to={`/detail/${prod.id}`}><button>SEE DETAIL</button></Link>
                    </div>
                    )
                })
            }
       

     </div>
    )
}

export default ItemList