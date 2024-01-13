import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import { Link } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { GrShop } from "react-icons/gr";
import BlogsDrop from "../../components/BlogsNav";
import { BasketContext } from "../../context/BasketContext";
import LogoNav from "../../components/NavbarComponenets/Logo";
import Navigations from "../../components/NavbarComponenets/navigations";
import Icons from "../../components/NavbarComponenets/icons";
import LogoNav2 from "../../components/NavbarComponenets/Logo/index2";

const SecondaryNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
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
   
    <nav id="navbar2" className={scrolled ? "scrolled2" : ""}>
        <div className="container navi">
      <LogoNav2/>
      <Navigations/>
      <Icons/>
      </div>
    </nav>
   
  );
};

export default SecondaryNavbar;
