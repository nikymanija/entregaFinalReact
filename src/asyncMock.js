

const products =[
    {
    id:'1',
    nombre:'DJI Flash FPV Combo Racing Drone 140km/h With 4K Camera',
    price:'450000',
    category:'expensive',
    img:'/assets/drone1.jpg' ,
    stock:3,
    description:'This is an expensive drone'      
    },
    {
        id:'2',
        nombre:'Drone DJI Mavic Mini 2 Single Camera 4K 30fps 10km',
        price:'250000',
        category:'expensive',
        img:'/assets/mavicMini2.jpg',
        stock:7,
        description:'This is a very expensive drone'       
        },
        {
            id:'3',
            nombre:'Drone Gadnic Buzzard T30 HD Camera Automatic Takeoff Return Home',
            price:'13000',
            category:'cheap',
            img:'/assets/drone3.jpg',
            stock:3,
            description:'This is a cheap drone'    
            },
            {
                id:'4',
                nombre:'DJI Inspire 2 Professional Drone with X5S Camera + Advanced Kit',
                price:'4300000',
                category:'expensive',
                img:'/assets/drone4.jpg',
                stock:11,
                description:'This is a very expensive drone'    
                },
                {
                    id:'5',
                    nombre:'Gadnic Drone With 1080p HD Camera For Adults And Children Outlet',
                    price:'9500',
                    category:'cheap',
                    img:'/assets/drone5.jpg',
                    stock:2,
                    description:'This is a cheap drone'    
                    },
                    {
                        id:'6',
                        nombre:'Gadnic Dual Camera Drone Full HD 4k Optical Flow Positioning',
                        price:'20000',
                        category:'cheap',
                        img:'/assets/drone6.jpg',
                        stock:4,
                        description:'This is a cheap drone'    
                        }
]

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsById = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(p=>p.id===id))
        },500)
    })

  

}

export const getProductsByCategory = (categoryId)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>{
                return prod.category === categoryId
            }))
        },500)
    })
}

