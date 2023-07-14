import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };
  const mobileMenuClassName = `nav-links-container ${
    isMobileMenuOpen ? "active" : ""
  }`;

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo-container">
        <div className="logo-holder logo_container">
          <a href="" className="header_link">
            <h3>Pixa</h3>
            <p>Image</p>
          </a>
        </div>
        <button
          id="mobileMenuTrigger"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-controls="navigationLinks"
          title="Open and Close Navigation"
          onClick={toggleMobileMenu}
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
      </div>
      <div id="navigationLinks" className={mobileMenuClassName}>
        <ul className="nav-links">
          <li className="fadelinks">
            <a id="home">Home</a>
          </li>
          <li className="fadelinks">
            <a>Explore</a>
          </li>
          <li className="fadelinks">
            <a>Upload</a>
          </li>
          <li className="fadelinks">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
