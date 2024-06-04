// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  handleScrollToTop,
  handleScrollToAbout,
  handleScrollToContact,
  handleScrollToCourses,
}) => {
  const navigate = useNavigate();

  const navigateAndScroll = (scrollToFunction) => {
    navigate("/");
    setTimeout(scrollToFunction, 100); // Adjust timeout as needed
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => navigateAndScroll(handleScrollToTop)}>LERNQUICK</h1>
      <ul>
        <li onClick={() => navigateAndScroll(handleScrollToTop)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => navigateAndScroll(handleScrollToAbout)}>
          <Link to="/">About</Link>
        </li>
        <li onClick={() => navigateAndScroll(handleScrollToContact)}>
          <Link to="/">Contact</Link>
        </li>
        <li onClick={() => navigateAndScroll(handleScrollToCourses)}>
          <Link to="/">Pick a Course</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
