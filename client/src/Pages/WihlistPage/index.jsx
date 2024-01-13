import React, { useContext } from 'react'
import { WishlidtContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
import { GrShop } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import "./index.scss"
import { Helmet } from 'react-helmet-async';
const WishPage = () => {
const {wishlist,deleteWish}= useContext(WishlidtContext)
const {addBasket}= useContext(BasketContext)


  return (
    <>
    <Helmet>
        <title>Wishlist</title>
      </Helmet>
    
    <div className="container">
    <div className='wishlist'>
        <h2>Wishlist</h2>
        <div className="row">

        
{
    wishlist && wishlist.map(x=>
        <div key={x._id} className="col-lg-3 col-md-4 col-6 product_item">
        <div className="product-item-v1">
          <div className="product mb-15 engoj_grid_parent relative">
            <div className="img-product">
              <div>
                <img
                  src={x.image}
                  alt=""
                />
              </div>
              <div className="icons">
                
                <div className="addcart addy">
                <div className="tooltip">Add to Cart</div>

                  <Link onClick={()=>addBasket(x)}>
                  
                  <GrShop />

                  </Link>
                </div>
                <div className="quickview addy">
                <div className="tooltip">Quickview</div>

                  <Link to={x._id}>
                    <IoSearch />
                  </Link>
                </div>
              </div>
            </div>
            <div className="info-product">
                <h4>{x.tittle}</h4>
                <p className="price-product">
                ${x.price}
                </p>
                <Link onClick={()=>deleteWish(x)}>delete</Link>
            </div>
          </div>
        </div>
      </div>   
    )
}   
</div>
    </div>
    </div>
    </>

  )
}

export default WishPage