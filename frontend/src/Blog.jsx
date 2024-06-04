import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
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
  );
}

export default Blog;
