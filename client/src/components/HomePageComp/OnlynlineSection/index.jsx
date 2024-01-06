import React from 'react'
import "./index.scss"
import Timer from '../Timer'
import { Link } from 'react-router-dom'
const Online = () => {
  return (
    <div id='online'>
<div className="container">
  <div className="row">
    <div className="col-lg-7 col-md-12 col-12">
<div className='box-info-content text-center'>
<div className="content-section">
  
      <h3>Only Online</h3>
      <Timer/>
    <p className='get'>Get 30% off your order of $100 or more</p>
    
    <p className='use'>USE CODE “TOPBIKE30”</p>
    <div className="butoon">
      <Link>SHOP NOW</Link>
    </div>
</div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Online