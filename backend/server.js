const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const PORT = "mongodb+srv://mohammedaymanquadri:Ayman2004@cluster0.zoasruc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/LernTek";

const Courses = require('./models/courses');
const courseController = require('./controllers/courses'); 

// Middleware
app.use(cors());
app.use(express.json());


// Route to get blog post by ID
app.get('/api/blog/:id', async (req, res) => {
  const {id} = req.params;

  Courses.findOne({ id: id.trim() })
  .then(course => {
    if (course) {
      console.log("Course found and is now being sent!");
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  })
  .catch(error => {
    console.log("some err occured in finding");
    res.status(500).json({ message: 'Server error', error });
  });

});

//to add courses
//courseController.addCourse();


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
mongoose.connect(PORT)
    .then(() => { 
        console.log('Connected to MongoDB !'); 
        app.listen(5000);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
