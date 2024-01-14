import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Header = () => {
  
  return (
    <div id='header-section'>
       <div className="road">
        <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294" alt="" />
        <div className="content-tit">
          <h3>Off Road Bicycle</h3>
          <p>Here to bring your life style to the next level.</p>
          <div className="butonn">
         <Link to="/shop">SHOP NOW</Link> 
          </div>
        </div>
       </div>
      
    </div>
  )
}

export default Header