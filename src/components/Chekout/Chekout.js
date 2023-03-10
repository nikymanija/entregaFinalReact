import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'



import { collection,serverTimestamp, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'

import { useNavigate } from 'react-router-dom'

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer,toast } from 'react-toastify';



const Checkout = () => {

  

    const [client,setClient]= useState({nombre:'',telefono:'',email:''})

    const { cart, getTotal, clearCart } = useContext(CartContext)


    

    const handleChange = (e)=>{
        const {name,value} = e.target
        setClient({
            ...client,
            [name]:value
        })
    }


    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()



    const handleCreateOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                   client
                },
                items: cart,
                date:serverTimestamp(),
                total: getTotal()
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
    
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quanty
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0 && client.nombre && client.telefono && client.email) {
                await batch.commit()
    
           
                const orderRef = collection(db, 'orders') 
    
               const orderAdded = await addDoc(orderRef, objOrder)   
                    
              

            
                      .then(res=> {
                      
                         toast.success( `Compra Exitosa, Numero de orden ${res.id} `) 
                         
                        } )
                     
                    .catch(error => 
                        toast.error("hubo un error!")
                      )
                  
            

                


              
            } else {
                toast.error("Se ingreso mal un dato, intente mas tarde")
                console.log('Productos fuera de stock o no cargados');
         }
        } catch (error) {
            console.error(error)
        } finally {
           
            setLoading(false)
        }

        clearCart()
        
       setTimeout(() => {
            navigate('/')
        }, 4000) 

    

    } 
    


     
    


    

    if(loading) {
     
        return <h1>Generando Orden...</h1>

        
    }

    return (
        <div>
            <h1>Checkout</h1>
        <ToastContainer/>
      


            <h2>Detalles De Tu Pedido:</h2>
        {
            cart.map(prod =>{
                const total = getTotal()
                return(
                    <div key={prod.id} className='CartContent'>

                
                        <h2>{prod.nombre} Unit x({prod.quanty} )</h2>
                      
                        <h2>${prod.price * prod.quanty}</h2>
                       
                        <h3>Total: ${total} </h3>
                    </div>
                )
            })
        }

      





            <p className='mt-5 ml-5'>Informaci??n Requer??ada para el Env??o</p>
                    <form className="form ml-5">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input value={client.nombre} name="nombre" className='form-control' type="text" id="nombre" onChange={handleChange} />
                            <label htmlFor="telefono">Tel??fono</label>
                            <input value={client.telefono} name="telefono" id="telefono" className='form-control' type="number" onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                            <input value={client.email} name="email" id="email" type="email" className='form-control' onChange={handleChange} />
                        </div>
                    </form>

            <button onClick={handleCreateOrder}>Confirmar orden</button>
        </div>
    )


    


}

export default Checkout