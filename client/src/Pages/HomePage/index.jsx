import React from 'react'
import Header from '../../components/HomePageComp/HeaderSection'
import Support from '../../components/HomePageComp/SupportSection'
import NewProduct from '../../components/HomePageComp/NewProductSection'
import Online from '../../components/HomePageComp/OnlynlineSection'
import News from '../../components/HomePageComp/NewsSection'

const HomePage = () => {
  return (
    <>
      <Header/>  
      <Support/>  
      <NewProduct/>  
      <Online/>  
      <News/>  
    </>
  )
}

export default HomePage