import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (scrollTarget) => {
    navigate("/", { state: { scrollTarget } });
    toggleMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <h1 onClick={() => handleNavigation("top")}>LERNQUICK</h1>
        <ul className={menuOpen ? "menu open" : "menu"}>
          <li onClick={() => handleNavigation("top")}>Home</li>
          <li onClick={() => handleNavigation("about")}>About</li>
          <li onClick={() => handleNavigation("contact")}>Contact</li>
          <li onClick={() => handleNavigation("courses")}>Pick a Course</li>
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
