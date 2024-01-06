import React from 'react'
import "./index.scss"
const Support = () => {
  return (
    <div id='support'>
<div className="card-sup">
  <div className="image-sup">
    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/free-delivery.png?v=1613577961" alt="" />
  </div>
  <div className="info">
    <h4 className='title'>
    Free Shipping
    </h4>
    <p className='content'>Only order from $230</p>
  </div>
</div>
<div className="card-sup">
  <div className="image-sup">
    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/return-of-investment.png?v=1613577961" alt="" />
  </div>
  <div className="info">
    <h4 className='title'>
    Money return
    </h4>
    <p className='content'>30 days free for return money</p>
  </div>
</div>
<div className="card-sup">
  <div className="image-sup">
    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/24-hours-support.png?v=1613577961" alt="" />
  </div>
  <div className="info">
    <h4 className='title'>
    Support 24/7
    </h4>
    <p className='content'>Always ready to support</p>
  </div>
</div>
    </div>
  )
}

export default Support