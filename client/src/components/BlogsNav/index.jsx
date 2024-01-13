import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss'; // Import your custom styles if needed

const BlogsDrop = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getData = async () => {
      try {
        const res = await axios('http://localhost:5000/products');
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
     
    };
  
    return (
        <div id='dropdown-blog'>
      <Slider {...settings}>
        {loading ? (
          <p>loading ...</p>
        ) : (
          data &&
          data.map((x) => (
            <div className="disss" key={x._id}>
              <div className="dimg">
                <div className="imaa">
                  <img src={x.image} alt="" />
                </div>
              </div>
              <div className="dtit">
                <h6>{x.tittle}</h6>
                <p>{x.price}$</p>
              </div>
            </div>
          ))
        )}
      </Slider>
      </div>
    );
  };
  
  export default BlogsDrop;
  

