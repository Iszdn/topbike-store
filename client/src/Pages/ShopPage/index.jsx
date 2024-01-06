import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from "react-icons/lia";
import { CiFilter } from "react-icons/ci";
import { RxTriangleDown } from "react-icons/rx";
import "./index.scss"
import Card from '../../components/Card';
const ShopPage = () => {
   const [open, setOpen] = useState(false)
   const [openFilter, setOpenFilter] = useState(false)
   
   const handleOpen=()=>{
setOpen(!open)
   }
   const handleOpenFilter=()=>{
    setOpenFilter(!openFilter)
   }
  return (
    <div id='shop'>
<div className="layout-products">
<div className="title-page">
    <h2>Products</h2>
</div>
<div className="bread-crumb">
    <Link to="/">Home<LiaAngleRightSolid /></Link>
    <strong>Products</strong>
</div>
</div>
<section className="section-shop">
<div className="container">
<div className="collection">
    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Biking-Basics-5-Essential-Bike-Tools-to-Take-with-You-on-a-Cycling-Adventure.jpg?v=1613576668" alt="" />
<div className="content">
    <h3>
    A NEW COLLECTION
    </h3>
    <p>SALE UP TO 30%</p>
    <div className="butt">
        <Link>Shop Now</Link>
    </div>
</div>
    </div>
    
    <div className="filter">
<div > 
    <div onClick={handleOpenFilter} className=" filter-btn filter cursor-default d-inline-flex">
        <CiFilter className='fil-icon'/>
<p>filter</p>
        </div>
        </div>
       

        <div className="dropdown ">
          <div onClick={handleOpen} className="featured-btni d-inline-flex">
<p>Featured</p>
<RxTriangleDown className='f-ic' />
        </div>  
        {
            open && 
             <ul className='dropdown-content'>
            <li>Featured</li>
            <li>Best Selling</li>
            <li>Alphabetically, A-Z</li>
            <li>Price, high to low</li>
            <li>Price, low to high</li>
            <li>Date, old to new</li>
            <li>Date, new to old</li>
        </ul> 
        }
      
     
        </div>
    </div>

{
    openFilter && <div className="filter-components">
        <div className="row filter_sidebar2">
<div className="col-lg-2 col-md-6 col-6">
<div className="widget-title">
    <h3>Categories</h3>
</div>
<div className="widget-content">
    <ul>
        <li>Shopping</li>
        <li>Bicycle</li>
        <li>Bicycle Accessory</li>
        <li>Helmet</li>
    </ul>
</div>
</div>
<div className="col-lg-2 col-md-6 col-6">
<div className="widget-title">
    <h3>Color Option</h3>
</div>
<div className="widget-content color">
    <ul>
        <li><input type="checkbox" value="red" /><Link style={{background:"red"}}></Link></li>
        <li><input type="checkbox" value="red" /><Link style={{background:"blue"}}></Link></li>
        <li><input type="checkbox" value="red" /><Link style={{background:"green"}}></Link></li>
        <li><input type="checkbox" value="red" /><Link style={{background:"pink"}}></Link></li>
        <li><input type="checkbox" value="red" /><Link style={{background:"yellow"}}></Link></li>
        <li><input type="checkbox" value="red" /><Link style={{background:"black"}}></Link></li>
    </ul>
</div>
</div>
<div className="col-lg-3 col-md-6 col-6">
<div className="widget-title ">
    <h3>Size Option</h3>
</div>
<div className="widget-content size">
    <ul>
        <li><Link>4YR</Link></li>
        <li><Link>5YR</Link></li>
        <li><Link>6YR</Link></li>
        <li><Link>7YR</Link></li>
        <li><Link>8YR</Link></li>
        <li><Link>9YR</Link></li>
        <li><Link>10YR</Link></li>
        <li><Link>11YR</Link></li>
        <li><Link>12YR</Link></li>
      
    </ul>
</div>
</div>
<div className="col-lg-2 col-md-6 col-6">
<div className="widget-title">
    <h3>Price Filter
</h3>
</div>
<div className="widget-content">
    <ul>
        <li>$0-$10</li>
        <li>$10-$20</li>
        <li>$20-$30</li>
        <li>$30-$40</li>
        <li>$40-$50</li>
        <li>over $50</li>
     
    </ul>
</div>
</div>
<div className="col-lg-3 col-md-6 col-6">
<div className="widget-title">
    <h3>Tags</h3>
</div>
<div className="widget-content tags">
    <ul>
        <li><Link>ADVENTURE & GRAVEL</Link> / </li>
        <li> <Link>Aluminum</Link> / </li>
        <li> <Link>Break</Link> / </li>
        <li><Link>Carbon</Link> / </li>
        <li><Link>DiamondBlack</Link> / </li>
        <li><Link>Fork</Link> / </li>
        <li><Link>Helmet</Link> / </li>
        <li><Link>Rims</Link> / </li>
        <li><Link>Road</Link> / </li>
        <li><Link>Suntour</Link></li>
    </ul>
</div>
</div>
        </div>
    </div>
}
    
<Card/>
    </div>
</section>
    
</div>

  )
}

export default ShopPage