import { useState,useEffect } from "react"
import { getDoc,doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../services/firebase/firebaseConfig"

const ItemDetailContainer = ()=>{

    const [loading, setLoading] = useState(true)

    const [products,setProduct] = useState({})

    const { productId } = useParams()


    useEffect(()=>{
        const productRef = doc(db,'products', productId)
      getDoc(productRef)
      .then(response=>{
        const data = response.data()
        const productAdapted = { id: response.id, ...data }

        setProduct(productAdapted)
      })
      .catch(err=> console.log(err))

      .finally(()=>{
        setLoading(false)
      })
    }, [productId])


    if(loading){
        return <h1>Loading ...</h1>
    }

    return(
        <div className="ItemDetailContainer">
            <h1>Products Detail</h1>

        <ItemDetail {...products} />

        </div>
    )
}

export default ItemDetailContainer