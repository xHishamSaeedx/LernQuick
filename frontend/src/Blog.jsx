// Blog.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component
import "./Blog.css";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the blog post from the backend
    fetch(`http://localhost:5000/api/blog/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleScrollToTop = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleScrollToAbout = () => {
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleScrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleScrollToCourses = () => {
    navigate("/");
    setTimeout(() => {
      const coursesSection = document.getElementById("courses-section");
      if (coursesSection) {
        const yOffset = -50; // Adjust this value as needed
        const y =
          coursesSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar
        handleScrollToTop={handleScrollToTop}
        handleScrollToAbout={handleScrollToAbout}
        handleScrollToContact={handleScrollToContact}
        handleScrollToCourses={handleScrollToCourses}
      />
      <div className="blog">
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <Link to="/">Back to Home</Link>
          </>
        ) : (
          <div>Blog post not found</div>
        )}
      </div>
    </div>
  );
}

export default Blog;
