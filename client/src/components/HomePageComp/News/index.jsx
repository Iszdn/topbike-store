import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "./index.scss"
import axios from "axios"
const NewsCards = () => {

const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

const getData=async ()=>{
    const res=await axios("http://localhost:3000/news")
    setData(res.data)
    setLoading(false)
}
useEffect(() => {
    getData()
}, [])

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <div className='news-card '>
        <Slider {...settings}>
        {
            loading ? <p>loading...</p> : (
                data && data.map(x=>(
             <div key={x.id} className="content-section-blog-v1 ">
    <div className="picrure">
        <img src={x.image} alt="" />
        <div className="date">
<span className='day'>{x.data}</span>
<span className='month'>{x.month}</span>
        </div>
    </div>
    <div className="info_blog">
        <p className='news-word'>News</p>
        <h4>{x.title}</h4>
        <p className='description'>
            {x.desc}
                </p>
                <div className="btn_readmore">
                    <Link>Readmore</Link>
                </div>
    </div>
</div>       
                )

                )
            )
        }
</Slider>
    </div>
  )
}

export default NewsCards