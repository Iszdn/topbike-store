import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from "react-icons/lia";
const Cart = () => {
  return (
    <div id='cart'>
        {/* Layou start */}
<div className='text-center bg-breadcrumb'>
<div className="title-page">
    <h2>Cart</h2>
</div>
<div className="bread-crumb">
    <Link to="/">Home<LiaAngleRightSolid /></Link>
    <strong>Products</strong>
</div>
</div>
        {/* Layou end */}

{/* cart section  start */}
<section className='page-cart'>
<div className="container">
    {/* table for product start */}
    <div className="table-responsive">
        {/* table start */}
        <table className='shop_table table--responsive cart table'>
{/* thead start */}
<thead>
    <tr className='cart-title'>
<th className='product-thumbnail' colspan="2">Product name</th>
<th className='product-price'>Price</th>
<th className='product-quantity'>Quantity</th>
<th className='product-subtotal'>Total</th>
<th className='product-remove'></th>
    </tr>
</thead>
{/* thead end */}

{/* tbody start */}

<tbody>
    <tr className='cart_item'>
        <td className='product-thumbnail'>
            <Link>
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/products/product11_small.jpg?v=1608083590" alt="" />
            </Link>
        </td>
        <td className='product-name-thumb'>BlueSunshine Brake Kit</td>
        <td className='product-price'>$56.00</td>
        <td className='product-quantity'>
            <div className="js-qty">
                <button className='qty_minus'>
<span className='fa fa-minus'>
-
</span>
                </button>
                <div className='inpp'> 1 </div>
                
                <button className='qty_plus'>
<span className='fa fa-plus'>
+
</span>
                </button>
            </div>
        </td>
        <td className='product-subtotal'>
            <span>$56.00</span>
        </td>
        <td className='product-remove'>
            <Link>
            X
            </Link>
        </td>
    </tr>
</tbody>
{/* tbody end */}

        </table>
        {/* table end */}

    </div>
    {/* table for product end */}

{/*  cart totals start */}
<div className="cart_totals">
    <div className="cart-update">
            <input type="submit"  value="Update Cart" className='button bg-color' />
    </div>
    <div className="continue-shopping1">
        <Link>Continue Shopping</Link>
    </div>
    <div className="cart-check">
        <h2 className="cart-title">CART TOTALS</h2>
        <table className='total-checkout'>
<tbody>
    <tr>
        <th className='cart-label'>
<span>Total</span>
        </th>
        <td className='cart-amount'>
<span><strong>$56.00</strong></span>
        </td>
    </tr>
</tbody>
        </table>
        <div className='wc-proceed-to-checkout clearfix'>
<Link>Proceed to checkout</Link>
        </div>
    </div>
</div>
{/* cart totals end */}
</div>
</section>
{/* cart section  end */}

    </div>
  )
}

export default Cart