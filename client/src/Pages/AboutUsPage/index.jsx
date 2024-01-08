import React from 'react'
import { Link } from 'react-router-dom'
import { LiaAngleRightSolid } from "react-icons/lia";
import "./index.scss"
import Reasons from '../../components/AboutPageComp/ReasonSwiper';
const AboutUs = () => {
  return (
    <div id='about-us'>
<div className="layout">
    <div className='text-center bg-breadcrumb'>
<h2>About Us</h2>
<div className="bread-crumb">
    <Link to="/">Home</Link><LiaAngleRightSolid />
    <strong>About Us</strong>
</div>
    </div>
</div>

<div className="about-page">
    <div className="container">
        <div className="about-introduce">
            <div className="row">
                <div className='col-lg-6 col-md-6 col-12 intro_image'>
<img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/agent1.jpg?v=1613576059" alt="" />
                </div>
                <div className='col-md-6 intro_detail d-flex align-items-center'>
<div className="info-intro">
    <p className='des_intro'>Photographer</p>
    <h3 className='title_intro'>John Lang</h3>
    <p className='content_intro'>
        We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.
        </p>
</div>
                </div>
            </div>
        </div>
        
    </div>
    <div className="reasons">
        <div className="container">
            <div className="title-servicebox">
                <h2>Reasons to shop with us</h2>
            </div>
            <Reasons/>
        </div>
    </div>
</div>
    </div>
  )
}

export default AboutUs