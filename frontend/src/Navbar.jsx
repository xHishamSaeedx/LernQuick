// Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  handleScrollToTop,
  handleScrollToAbout,
  handleScrollToContact,
  handleScrollToCourses,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateAndScroll = (scrollToFunction) => {
    navigate("/");
    setTimeout(scrollToFunction, 100); // Adjust timeout as needed
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 onClick={() => navigateAndScroll(handleScrollToTop)}>LERNQUICK</h1>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={menuOpen ? "menu open" : "menu"}>
          <li
            onClick={() => {
              navigateAndScroll(handleScrollToTop);
              toggleMenu();
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              navigateAndScroll(handleScrollToAbout);
              toggleMenu();
            }}
          >
            <Link to="/">About</Link>
          </li>
          <li
            onClick={() => {
              navigateAndScroll(handleScrollToContact);
              toggleMenu();
            }}
          >
            <Link to="/">Contact</Link>
          </li>
          <li
            onClick={() => {
              navigateAndScroll(handleScrollToCourses);
              toggleMenu();
            }}
          >
            <Link to="/">Pick a Course</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
