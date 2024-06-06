import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  handleScrollToTop,
  handleScrollToAbout,
  handleScrollToContact,
  handleScrollToCourses,
  blogSections,
  handleScrollToSection,
  selectedSection, // Add selectedSection prop
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
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <h1 onClick={() => navigateAndScroll(handleScrollToTop)}>LERNQUICK</h1>
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
          {blogSections &&
            blogSections.map((section, index) => (
              <li
                key={index}
                className="blog-section"
                onClick={() => {
                  handleScrollToSection(`section-${index}`, index);
                  toggleMenu();
                }}
              >
                <button
                  className={`button-style ${
                    selectedSection === index ? "active" : ""
                  }`}
                >
                  {section.section_title}
                </button>
              </li>
            ))}
        </ul>
        {menuOpen && (
          <div className="close-icon" onClick={toggleMenu}>
            &#10006; {/* Cross symbol */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
