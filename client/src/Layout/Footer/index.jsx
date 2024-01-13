import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    const [logo, setLogo] = useState([])
    const [loading, setLoading] = useState(true)
    async function getLogo() {
        const data=await fetch("http://localhost:5000/logoblack")
        const res=await data.json()
        setLogo(res)
        setLoading(false)
    }
    useEffect(() => {
    getLogo()
    }, [])
    
  return (
    <footer id="footer">
      <div className="top">
        <div className="container container-v2">
          <div className="row">
            <div className="col-lg-3 col-md-12  col-12 logoo ">
              <div className="logo-info">
                <div className="logo">
                    {
                        loading ? <p>loading...</p> : 
                        logo && logo.map(x=>(
                            <img key={x._id} src={x.image} alt="" />
                        ))
                    }
                    
                </div>
                <p>The simple, delicate and light design <br />
                makes it comfortable for everyone.</p>
                <div className="sosial">
                    <div><FaTwitter /></div>
                    <div><FaDribbble /></div>
                    <div><FaBehance /></div>
                    <div><FaInstagram /></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-6 border-ft">
              <div className="logo-info">
                <div className="title">
                  <h4>Shop</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/shop">Shopping</Link>
                  </li>
                  <li>
                    <Link to="/shop">Bicycle</Link>
                  </li>
                  <li>
                    <Link to="/shop">Bicycle Accessory</Link>
                  </li>
                  <li>
                    <Link to="/shop">Helmet</Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-6 border-ft">
              <div className="logo-info">
                <div className="title">
                  <h4>About Us</h4>
                </div>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Pagination</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Accessories</a>
                  </li>
                  <li>
                    <a href="">Term of use</a>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-6 border-ft">
              <div className="logo-info">
                <div className="title">
                  <h4>Information</h4>
                </div>
                <ul>
                  <li>
                    <a href="">Address</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Products Return</a>
                  </li>
                  <li>
                    <a href="">Wholesale Policy</a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
            <div className="foot align-items-center ">
                <div>
                   <div className="text-copyright">
                    <p>© Copyright 2020 | <span>  TopBike</span> By <span className="engo"> EngoTheme.</span> Powered by Shopify.</p>
                   </div>
                </div>
                <div><div className="kard"><img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1613576066" alt="" /></div></div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
