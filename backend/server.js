const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data (in a real scenario, you'd fetch this from a database)
const blogPosts = {
  1: {
    title: "Cybersecurity",
    content:
      "This is the detailed content of blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  2: {
    title: "AI and ML",
    content:
      "This is the detailed content of blog post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  3: {
    title: "Web Development",
    Sections: [
      {
        section_title: "HTML",
        section_content: [
          {
            page_section_title: "Intro",
            page_section_content: [
              {
                type: "paragraph",
                content: `
                  HTML, or HyperText Markup Language, is the standard markup language used to create and design web pages. It structures content on the web by defining various elements such as headings, paragraphs, links, images, and other multimedia. HTML uses a system of tags and attributes to annotate text and multimedia documents, making them interactive and visually appealing in web browsers
                  `,
              },
              {
                type: "code",
                language: "HTML",
                content: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My First Web Page</title>
                    </head>
                    <body>
                    
                        <h1>Hello, World!</h1>
                        <p>This is my first web page.</p>
                    
                    </body>
                    </html>
            `,
              },
            ],
          },
          {
            page_section_title: "Intro",
            page_section_content: [
              {
                type: "paragraph",
                content: `
                  HTML, or HyperText Markup Language, is the standard markup language used to create and design web pages. It structures content on the web by defining various elements such as headings, paragraphs, links, images, and other multimedia. HTML uses a system of tags and attributes to annotate text and multimedia documents, making them interactive and visually appealing in web browsers
                  `,
              },
              {
                type: "code",
                language: "HTML",
                content: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My First Web Page</title>
                    </head>
                    <body>
                    
                        <h1>Hello, World!</h1>
                        <p>This is my first web page.</p>
                    
                    </body>
                    </html>
            `,
              },
            ],
          },
          {
            page_section_title: "Intro",
            page_section_content: [
              {
                type: "paragraph",
                content: `
                  HTML, or HyperText Markup Language, is the standard markup language used to create and design web pages. It structures content on the web by defining various elements such as headings, paragraphs, links, images, and other multimedia. HTML uses a system of tags and attributes to annotate text and multimedia documents, making them interactive and visually appealing in web browsers
                  `,
              },
              {
                type: "code",
                language: "HTML",
                content: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My First Web Page</title>
                    </head>
                    <body>
                    
                        <h1>Hello, World!</h1>
                        <p>This is my first web page.</p>
                    
                    </body>
                    </html>
            `,
              },
            ],
          },
        ],
      },
      {
        section_title: "CSS",
        section_content: [
          {
            page_section_title: "Intro",
            page_section_content: [
              {
                type: "paragraph",
                content: `
                  CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation of a document written in HTML. It is used to control the layout, design, and appearance of multiple web pages all at once. CSS allows web developers to create a consistent look and feel across a website, making it visually appealing and user-friendly.
                  `,
              },
              {
                type: "code",
                language: "CSS",
                content: `
                    body {
                        background-color: lightblue;
                    }
                    
                    h1 {
                        color: white;
                        text-align: center;
                    }
                    
                    p {
                        font-family: verdana;
                        font-size: 20px;
                    }
            `,
              },
            ],
          },
        ],
      },
    ],
  },
  4: {
    title: "App Development",
    content:
      "This is the detailed content of blog post 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more blog posts as needed
};

// Route to get blog post by ID
app.get("/api/blog/:id", (req, res) => {
  const { id } = req.params;
  const blogPost = blogPosts[id];

  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).json({ message: "Blog post not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
