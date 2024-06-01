// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState("Loading...");

//   useEffect(() => {
//     fetch("/api/data")
//       .then((response) => response.json())
//       .then((data) => setMessage(data.message));
//   }, []);
