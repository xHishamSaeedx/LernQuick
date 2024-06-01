// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Home-components/NavBar";
import ImageSlider from "./Home-components/ImageSlider";
import "./Home.css";

const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    excerpt: "This is a short description of blog post 1.",
  },
  {
    id: 2,
    title: "Blog Post 2",
    excerpt: "This is a short description of blog post 2.",
  },
  // Add more blog posts as needed
];

function Home() {
  return (
    <div className="home">
      <NavBar />
      <ImageSlider />
      <div className="intro">
        <h1>Welcome to the Blog</h1>
        <p>This is an introduction to the blog. Enjoy reading!</p>
      </div>
      <div className="cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
