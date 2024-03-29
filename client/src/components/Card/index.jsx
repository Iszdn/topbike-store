import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import axios from "axios"
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { GrShop } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { BasketContext } from "../../context/BasketContext";
import { WishlidtContext } from "../../context/WishlistContext";
const Card = (x) => {
    const {addBasket }=useContext(BasketContext)
    const {addWish }=useContext(WishlidtContext)
    
    

  return (
   
      
                  <div  className="col-lg-3 col-md-4 col-6 product_item">
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
                <div className="addwish addy">
                <div className="tooltip">Add to Wishlist</div>
                  <Link  onClick={()=>addWish(x)}>
                    <GoHeart className="black"/>
                  </Link>
                </div>
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
            </div>
          </div>
        </div>
      </div>    
            
      
  
  );
};

export default Card;
