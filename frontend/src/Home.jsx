import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
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
  {
    id: 3,
    title: "Blog Post 3",
    excerpt: "This is a short description of blog post 3.",
  },
  {
    id: 4,
    title: "Blog Post 4",
    excerpt: "This is a short description of blog post 4.",
  },
  {
    id: 5,
    title: "Blog Post 5",
    excerpt: "This is a short description of blog post 5.",
  },
  {
    id: 6,
    title: "Blog Post 6",
    excerpt: "This is a short description of blog post 6.",
  },
  {
    id: 7,
    title: "Blog Post 7",
    excerpt: "This is a short description of blog post 7.",
  },
  {
    id: 8,
    title: "Blog Post 8",
    excerpt: "This is a short description of blog post 8.",
  },
  // Add more blog posts as needed
];

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Hero />
      <div className="background-image"></div>
      <div className="content">
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
    </div>
  );
}

export default Home;
