const Courses = require('../models/courses');

// Example blog post data
const CourseData = {
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
  // Add more courses as needed
};

  
  // Add course func
  exports.addCourse =() =>{
    const courseDocuments = Object.keys(CourseData).map(id => ({
      id: parseInt(id),
      ...CourseData[id]
    }));
    
    // Save each course to the database
    courseDocuments.forEach(course => {
      const newCourse = new Courses(course);
      newCourse.save()
        .then(() => console.log(`Course with ID ${course.id} saved successfully.`))
        .catch(err => console.log(`Error saving course with ID ${course.id}:`, err));
    });
  }

  
  

module.exports = CourseData;