import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import SecondaryNavbar from '../SecondaryNavbar'

const SecondLayout = () => {
  return (
    <>
<SecondaryNavbar/>
<Outlet/>
<Footer/>
    </>
  )
}

export default SecondLayout