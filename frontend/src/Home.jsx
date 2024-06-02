import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About"; // Import the About component
import Contact from "./Contact"; // Import the Contact component
import "./Home.css";
import image1 from "./cybersecurity.jpg";
import image2 from "./aidev.jpg";
import image3 from "./webdev.jpg";
import image4 from "./appdev.jpg";

const blogs = [
  {
    id: 1,
    title: "Cybersecurity",
    excerpt:
      "Why don't cybersecurity experts ever get lost ? <br />Because they always follow the 'root' directory!",
    image: image1,
  },
  {
    id: 2,
    title: "AI and ML",
    excerpt:
      "Why did the AI go to therapy? <br />Because it had too many 'deep learning' issues!",
    image: image2,
  },
  {
    id: 3,
    title: "Web Development",
    excerpt:
      "Why did the JavaScript developer go broke? <br />Because he spent all his money buying 'cookies' for his website!",
    image: image3,
  },
  {
    id: 4,
    title: "App Development",
    excerpt:
      "Why did the app developer bring a pencil to the meeting?<br />Because he heard they were discussing 'app-solutely' important ideas!",
    image: image4,
  },
];

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Hero />
      <About /> {/* Add the About component here */}
      <div className="background-image"></div>
      <div className="content">
        <div className="intro">
          <h1 className="intro-title flickering-text">PICK YOUR COURSE!</h1>
        </div>
        <div className="cards">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <h1
                style={{
                  textShadow:
                    "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff",
                }}
                className="card-heading"
              >
                {blog.title}
              </h1>
              <br />
              <img src={blog.image} alt={blog.title} />
              <p
                className="card-para"
                dangerouslySetInnerHTML={{ __html: blog.excerpt }}
              ></p>
              <Link to={`/blog/${blog.id}`} className="learn-button">
                Learn It
              </Link>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Contact /> {/* Add the Contact component here */}
      </div>
    </div>
  );
}

export default Home;
