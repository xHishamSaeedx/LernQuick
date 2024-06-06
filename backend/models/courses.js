const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSectionContentSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  language: { type: String } // only applicable for 'code' type
});

const PageSectionSchema = new Schema({
  page_section_title: { type: String, required: true },
  page_section_content: [PageSectionContentSchema]
});

const SectionSchema = new Schema({
  section_title: { type: String, required: true },
  section_content: [PageSectionSchema]
});

const CourseSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String },
  Sections: [SectionSchema]
});



const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
