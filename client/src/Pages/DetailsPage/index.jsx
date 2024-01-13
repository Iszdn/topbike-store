import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { WishlidtContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { GoHeart } from "react-icons/go";
import { GrShop } from "react-icons/gr";
import "./index.scss"
import { Helmet } from 'react-helmet-async'
const Details = () => {
    const [data, setData] = useState(null)
    const {id}=useParams()
    const {addBasket }=useContext(BasketContext)
    const {addWish }=useContext(WishlidtContext)


   async function getId() {
        const res=await axios(`http://localhost:5000/products/${id}`)
setData(res.data)
    }
console.log(data);
    useEffect(() => {
        getId()
    }, [])
    
  return (
    <>
 
     <div className="container">
          <div className='row details'>
{
    data && 
    <div  className="col-lg-6 col-12 col-md-12 product_item">
    <div className="product-item-v1">
      <div className="product mb-15 engoj_grid_parent relative d-flex">
        <div className="img-product">
          <div>
            <img
              src={data.image}
              alt=""
            />
          </div>
          <div className="icons">
            <div className="addwish addy">
            <div className="tooltip">Add to Wishlist</div>
              <Link  onClick={()=>addWish(data)}>
                <GoHeart className="black"/>
              </Link>
            </div>
            <div className="addcart addy">
            <div className="tooltip">Add to Cart</div>

              <Link onClick={()=>addBasket(data)}>
              
              <GrShop />

              </Link>
            </div>
           
          </div>
        </div>
        <div className="info-product">
            <h4>{data.tittle}</h4>
            <p className="price-product">
            ${data.price}
            </p>
        </div>
      </div>
    </div>
  </div>   
}
    </div> 
    </div>
    </>
   
 
  )
}

export default Details