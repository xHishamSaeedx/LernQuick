import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Blog.css";

const blogContent = {
  1: {
    title: "Blog Post 1",
    content:
      "This is the detailed content of blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  2: {
    title: "Blog Post 2",
    content:
      "This is the detailed content of blog post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more blog posts as needed
};

function Blog() {
  const { id } = useParams();
  const blog = blogContent[id];

  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Blog;
