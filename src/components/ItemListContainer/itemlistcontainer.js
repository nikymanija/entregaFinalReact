import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import { collection, getDocs, query,where,orderBy } from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'



const ItemListContainer = ()=>{

    const [products,setProducts]= useState([])

    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    useEffect(()=>{
        setLoading(true)
        const productsRef = categoryId

        ? query(collection(db,'products'), where('category', '==', categoryId))
        : query(collection(db,'products'), orderBy('price', 'asc'))
        getDocs(productsRef)
        .then(response =>{
            const productAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
             })
             setProducts(productAdapted)
        })

        .catch(err=> console.log(err))

        .finally(()=>{
            setLoading(false)
        })
      
    },[categoryId])
  

    if(loading){
        return <h1>Loading...</h1>
    }

    return( 
        <div className='ItemListContainer'>
         <h2> {  categoryId  ||'all'} {'drone'}</h2>   

               <ItemList products={products}/> 
               
        </div>
    )
}

export default ItemListContainer