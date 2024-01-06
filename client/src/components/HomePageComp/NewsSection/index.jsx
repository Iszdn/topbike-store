import React from 'react'
import "./index.scss"
import NewsCards from '../News'
const News = () => {
  return (
    <div id='news'>
 <div id='new-product'>
      <div className="container">
        <div className="text-center">
          <h3>LATEST NEWS</h3>
          
        </div>
        <div className='news'>
<NewsCards/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default News