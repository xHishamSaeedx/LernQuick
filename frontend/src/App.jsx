import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import "./App.css";

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Simulate the animation duration
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <Router>
      <div className="app">
        {showAnimation && (
          <div className="animation-container">
            <div className="wallpaper">
              <h1
                style={{
                  textShadow:
                    "0 0 10px #ff7f00, 0 0 20px #ff7f00, 0 0 30px #ff7f00",
                }}
                className="welcome-text"
              >
                Welcome
              </h1>
            </div>
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
