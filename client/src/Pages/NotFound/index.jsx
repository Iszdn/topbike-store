import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
const NotFound = () => {
  return (
    <div id='not-found'>
<div className="container">
    <div className="title">
        <h1>404</h1> 
        <h2>Oops! That page can’t be found.</h2>
        <p className='sub-title'>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</p>
        <p className='sub-link'>Please return to <Link to="/">Home page</Link></p>
        <div className="search">
            <form action="">
                <input type="text" placeholder='Search...' />
                <button type='submit'>
                <FaSearch className='icon'/>
                </button>
            </form>
        </div>
    </div>
   
</div>
    </div>
  )
}

export default NotFound