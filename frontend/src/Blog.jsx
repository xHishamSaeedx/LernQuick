import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // You can choose different styles available
import Navbar from "./Navbar"; // Import Navbar component
import "./Blog.css";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSection, setSelectedSection] = useState(0);
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

  useEffect(() => {
    // Highlight the code blocks after rendering
    if (blog) {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [blog]);

  const handleScrollToSection = (sectionId, index) => {
    setSelectedSection(index);

    // Add active class to the clicked button and remove from others
    const buttons = document.querySelectorAll(".sidebar ul li button");
    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  const handleScrollToTop = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "paragraph") {
        return <p key={index}>{item.content}</p>;
      } else if (item.type === "code") {
        return (
          <div key={index} className="code-block">
            <div className="code-header">
              <span>{item.language.toUpperCase()}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.content);
                  alert("Code copied to clipboard!");
                }}
              >
                Copy Code
              </button>
            </div>
            <pre>
              <code className={item.language}>{item.content}</code>
            </pre>
          </div>
        );
      } else if (item.type === "heading") {
        return (
          <div key={index} className="heading">
            <h3 style={{ fontSize: "1.5em", marginBottom: "15px" }}>
              {item.content}
            </h3>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="blog-container">
      <Navbar handleScrollToTop={handleScrollToTop} />
      <div className="sidebar">
        <h2>Sections</h2>
        <ul>
          {blog &&
            blog.Sections.map((section, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    handleScrollToSection(`section-${index}`, index)
                  }
                  className={selectedSection === index ? "active" : ""}
                >
                  {section.section_title}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="blog">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {blog && (
          <>
            <h1>{blog.title}</h1>
            {blog.Sections.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                style={{
                  display: selectedSection === index ? "block" : "none",
                }}
              >
                <h2>{section.section_title}</h2>
                {section.section_content.map((subsection, subIndex) => (
                  <div key={subIndex} className="subsection">
                    <h3 className="page-section-title-h3">
                      {subsection.page_section_title}
                    </h3>
                    {renderContent(subsection.page_section_content)}
                    {subIndex !== section.section_content.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            ))}
            <Link to="/">Back to Home</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;
