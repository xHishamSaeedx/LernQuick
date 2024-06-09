import React, { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link here
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import image1 from "./cybersecurity.jpg";
import image2 from "./aidev.jpg";
import image3 from "./webdev.jpg";
import image4 from "./appdev.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const coursesRef = useRef(null);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCourses = () => {
    const coursesSection = coursesRef.current;
    if (coursesSection) {
      const yOffset = -50; // Adjust this value as needed
      const y =
        coursesSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTarget) {
      const { scrollTarget } = location.state;
      if (scrollTarget === "top") {
        handleScrollToTop();
      } else if (scrollTarget === "about") {
        handleScrollToAbout();
      } else if (scrollTarget === "contact") {
        handleScrollToContact();
      } else if (scrollTarget === "courses") {
        handleScrollToCourses();
      }
    }
  }, [location]);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div id="about-section" ref={aboutRef}>
        <About />
      </div>
      <div className="content">
        <div id="courses-section" ref={coursesRef}></div>
        <div className="intro">
          <h1 className="intro-title flickering-text">PICK YOUR COURSE!</h1>
        </div>
        <div className="cards">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <h1 className="card-heading">{blog.title}</h1>
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
        <div id="contact-section" ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
