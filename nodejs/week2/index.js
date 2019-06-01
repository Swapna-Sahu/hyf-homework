const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const Mentor = require("./mentor.js");
const Course = require("./course.js")

const hyf_mentors = new Mentor("./mentors.json");
const hyf_courses = new Course("./courses.json");

// GET /mentors/<name here> - that returns mentor with given name, or "Not found" if not found.
app.get("/mentors/:name", function (req, res) {
  const mentorName = req.params.name;
  const searchedMentor = hyf_mentors.getMentorDetail(mentorName);
  if (searchedMentor === undefined) {
    res.send('Mentor not found');
  }
  else {
    res.send(searchedMentor);
  }

});

// POST /mentors - that adds new mentor.

app.post("/mentors", function (req, res) {
  //res.send(hyf_mentors.addMentor(req.body));
  hyf_mentors.addNewMentor(req.body);
  res.send("Mentor is  added!")
});

// GET /courses - get all courses.
app.get('/courses', function (req, res) {
  let courses = hyf_courses.getCoursesDetail();
  res.send(courses);
});

// GET /courses/<name here>
app.get("/courses/:name", function (req, res) {
  const courseName = req.params.name;
  const searchedCourse = hyf_courses.getCourseDetail(courseName);
  if (searchedCourse === undefined) {
    res.send('Course not found');
  }
  else {
    res.send(searchedCourse);
  }

});

// POST /courses- that adds new course
app.post("/courses", function (req, res) {

  hyf_courses.addCourse(req.body);
  res.send("Course is  added!")
});


app.listen(3000);
console.log("Server is running");

