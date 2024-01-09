import React, { useEffect, useState } from "react";
import "./index.scss";
import LogoNav from "../../components/NavbarComponenets/Logo";
import Navigations from "../../components/NavbarComponenets/navigations";
import Icons from "../../components/NavbarComponenets/icons";
const Navbar = () => {
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
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="container navi">
        <LogoNav />
        <Navigations />
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
