import React, { useEffect, useState } from "react";
import "./index.scss"
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GrShop } from "react-icons/gr";
import BlogsDrop from "../../components/BlogsNav";
const Navbar = () => {
  const [logonav, setLogonav] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  async function getLogo() {
    const data = await fetch("http://localhost:3000/logonav");
    const res = await data.json();
    setLogonav(res);
    setLoading(false);
  }
  useEffect(() => {
    getLogo();
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const isScrolled = scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  
  return (
   
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="container navi">
      <div className="logonav">
        {loading ? (
          <p>loading...</p>
        ) : (
          logonav && logonav.map((x) => <img key={x.id} src={x.image} alt="" />)
        )}
      </div>
      <div className="navigation">
<ul className="navigations">
    <li className="drop"><Link to="/" className="kk">Home</Link>
    <div className="dropdown-menu home list-woman shop show">
        <div className="row">
            <div className="col-lg-4 col-md-4 nn">
                <Link to="/">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/home1_79702614-1d24-4067-9a69-2ee018b89d3b.jpg?v=1613577776" alt="" />
           </Link>
            </div>
            <div className="col-lg-4 col-md-4 nn">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/home2_411f599e-59e9-4ba9-8de2-3d92ad6282c6.jpg?v=1613577776" alt="" />
            </div>
            <div className="col-lg-4 col-md-4 nn">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/home3_8ef816a2-0531-4578-a497-139164f99d10.jpg?v=1613577776" alt="" />
            </div>
            <div className="col-lg-4 col-md-4 nn">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/home4_3c5e0131-1366-4c93-a41b-9f35d04f4449.jpg?v=1613577776" alt="" />
            </div>
            <div className="col-lg-4 col-md-4 nn">
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/home5_6e4f660a-7d2a-4559-869e-761708fefc9a.jpg?v=1613577776" alt="" />
            </div>
        </div>
    </div>
    </li>
    <li className="drop"><Link to="/shop">Shop</Link>
    <div className="dropdown-menu shop list-woman shop show">
        <div className="row shop-drop">
        <ul className="col-lg-2 col-md-2">
            <a className="tit">Shop Layout</a>
        <li>Pagination</li>
        <li>Ajax Loading</li>
        <li>List View</li>
        <li>Background</li>
        <li>Modern</li>
        <li>Fullwidth Layout</li>
        <li>Sidebar Layout</li>
        </ul>
        <ul className="col-lg-2 col-md-2">
            <a className="tit">Shop Heading</a>
            <li>Small Heading</li>
            <li>Banner Heading</li>
            <li>Dark Heading</li>
            <li>Icons Catgories</li>
            <li>Mini Categories</li>
            <li>Background</li>
        </ul>
        <ul className="col-lg-2 col-md-2">
            <a className="tit">Filter Layout</a>
            <li>Top Filter</li>
            <li>Drawer Filter</li>
            <li>Off Canvas Filter</li>
            <li>Brand Filter</li>
            <li>Sticky Filter</li>
            <li>Acordition Filter</li>
        </ul>
        <ul className="col-lg-2 col-md-2">
            <a className="tit">Product Layout</a>
            <li>Vertical ThumbnailHOT</li>
            <li>Horizontal Thumbnail</li>
            <li>Sticky Detail</li>
            <li>Sticky CenterNEW</li>
            <li>With Background</li>
            <li>Gallery Basic</li>
            <li>Slider Large</li>
            <li>Slider Center</li>
            <li>Slider Gallery</li>
            <li>Extra SidebarNEW</li>
            <li>Gallery Modern</li>
            </ul>
        <ul className="col-lg-2 col-md-2">
            <a className="tit">Product Type</a>
            <li>SimpleNEW</li>
            <li>Variable ColorHOT</li>
            <li>Variable Image</li>
            <li>Variable Select</li>
            <li>External / AffiliateHOT</li>
            <li>Boosted Sale</li>
        </ul>
     
        <div className="image-moto col-lg-2 col-md-2">
<img src="https://topbike-store-demo.myshopify.com/cdn/shop/t/2/assets/apmenuitem_ihtml_2.jpg?v=59416964537520428881607489856" alt="" />
        </div>
        </div>
        
    </div>
    </li>
    <li className="drop"><Link>Featured</Link>
    <div className="dropdown-menu featured list-woman shop show"> 
    <div className="row">
        <div className="col-lg-12 video col-md-12"> 
            <iframe src="https://player.vimeo.com/video/203552982?background=1&amp;quality=1080p&amp;loop=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">

    </iframe></div>
    <div className="row shop-drop">
        <ul className="col-lg-6 col-md-6">
            <a className="tit"> 9 PRODUCT HOVER</a>
            <li>Product Hover Style 1</li>
            <li>Product Hover Style 2</li>
            <li>Product Hover Style 3</li>
            <li>Product Hover Style 4</li>
            <li>All Style</li>
        </ul>
        <ul className="col-lg-6 col-md-6">
            <a className="tit">THEME ELEMENT</a>
            <li>Ajax Search</li>
            <li>Ajax Minicart</li>
            <li>Recently Products</li>
            <li>Social Share</li>
        </ul>
    </div>
    </div>
    </div>
   
    </li>
    <li className="drop"><Link>Pages</Link>
    <div className="dropdown-menu pages list-woman shop show"> 
   
    <div className="row shop-drop">
        <ul className="col-lg-4 col-md-4">
            <a className="tit"> DEMO LAYOUT</a>
            <li>Full Screen</li>
            <li>Heading Background</li>
            <li>Simple</li>
        </ul>
        <ul className="col-lg-4 col-md-4">
            <a className="tit"> PRE - BUILD PAGES</a>
            <li><Link to="/aboutus">About Us</Link></li>
            <li>About Us #2</li>
            <li>Contact Us</li>
            <li>Contact Us #2</li>
            <li>FAQs</li>
            <li><Link to="*">404 Page</Link></li>
            <li><Link to="/login">Login/RegisterN</Link></li>
        </ul>
        <ul className="col-lg-4 col-md-4">
            <a className="tit">ECOMERCE</a>
            <li><Link to="/shop">Shop</Link></li>
            <li> <Link to="/cart">Cart</Link></li>
            <li>Checkout</li>
            <li><Link to="/account">My Account</Link></li>
        </ul>
    </div>
    </div>
    </li>
    <li className="drop"><a>Blogs</a>
    <div className="dropdown-menu blogs list-woman shop show"> 
   
    <div className="row shop-drop">
        <ul className="col-lg-3 col-md-4">
            <a className="tit">Layout</a>
            <li>Grid</li>
            <li>Classic</li>
            <li>Standar</li>
            <li>No Sidebar</li>
            <li>Left Sidebar</li>
            <li>Right Sidebar</li>
        </ul>
        <ul className="col-lg-3 col-md-4">
            <a className="tit">SINGLE POST</a>
            <li>No Sidebar</li>
            <li>Left Sidebar</li>
            <li>Right Sidebar</li>
            <li>Standar</li>
            <li>Audio</li>
            <li>Video</li>
        </ul>
        <ul className="col-lg-6 col-md-4">
            <a className="tit">PRODUCT NEW</a>
            <li>
                <BlogsDrop/>
            </li>
            
        </ul>
    </div>
    </div>
    </li>
</ul>
      </div>
      <div className="icons">
        <span><IoSearch /></span>
        <span><IoPersonOutline /></span>
        <span><FiHeart /><span className="cirkle">1</span></span>
        <span><GrShop /><span className="cirkle">1</span></span>
      </div>
      </div>
    </nav>
   
  );
};

export default Navbar;
