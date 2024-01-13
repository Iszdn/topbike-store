import React, { useEffect, useState } from 'react'
import "./index.scss"
import Card from '../../Card'
import axios from 'axios'
const NewProduct = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData=async ()=>{
      try {
       const res=await axios("http://localhost:5000/products")
       setData(res.data)
       setLoading(false)
      } catch (error) {
       console.log(error);
      }
   }

   useEffect(() => {
     getData()
   }, [])

  return (
    <div id='new-product'>
      <div className="container">
        <div className="text-center">
          <h3>New Product</h3>
          <div className='products'>
            <div className='row'>

              {
                loading ? <p>loading...</p> :
                data && data.map(x=>
                  <Card  key={x._id} {...x}/> 
                  )
              
              }
            
            </div>

          </div>
        </div>
      </div>
      </div>
  )
}

export default NewProduct