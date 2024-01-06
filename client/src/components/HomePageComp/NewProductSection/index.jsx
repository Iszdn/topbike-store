import React from 'react'
import "./index.scss"
import Card from '../../Card'
const NewProduct = () => {
  return (
    <div id='new-product'>
      <div className="container">
        <div className="text-center">
          <h3>New Product</h3>
          <div className='products'>
<Card/>
          </div>
        </div>
      </div>
      </div>
  )
}

export default NewProduct