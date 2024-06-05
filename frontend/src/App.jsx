import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import "./App.css";

function App() {
  const [showStrips, setShowStrips] = useState(true);
  const shades = [
    "#FFD699", // Lighter shade of orange-red
    "#FFB366", // Slightly darker and more orange-reddish
    "#FF984D", // Deeper orange-red
    "#FF8000", // Even deeper orange-red
    "#FF6600", // Darkest shade of orange-red
  ];
  // Different shades

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowStrips(false);
    }, 1000 + 0.025 * 4 * 1000); // Total duration including delay between strips

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <Router>
      <div className="app">
        {showStrips && (
          <div className="strips-container">
            {shades.map((shade, index) => (
              <div
                key={index}
                className="strip"
                style={{
                  animationDelay: `${0.1 * index + 0.25}s`,
                  backgroundColor: shade,
                }}
              ></div>
            ))}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
