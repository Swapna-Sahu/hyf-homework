/************* Development file      ************* */
/****       1.Express library        
 *          2.Router 
 *          3.HTTP
       */
const http = require('http');
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 8001;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())    // parse application/json


/***************************    main work area    ************************* */

const Courses = require("./Courses");
const Mentors = require("./Mentors");

let hyf_courses = new Courses("./courses.json");
let hyf_mentors = new Mentors("./mentors.json");


/*const courses = hyf_courses.getCourseList();
/*const courses = hyf_courses.getList();
const courses = hyf_courses.getCourseByName("Git");
const courses = hyf_courses.addCourse({"name": "Angular",
"duration":"5 weeks"});
const courses = hyf_courses.deleteCourse("Angular");
console.log(courses);*/

/*const mentors = hyf_mentors.getMentorList();
const mentors = hyf_mentors.getMentorByName("Emil");
const mentors = hyf_mentors.addMentor({"name": "Swapna",
"courses":[ 'HTML/CSS', 'JavaScript', 'ReactJS' ] });
const mentors = hyf_mentors.deleteMentor("Swapna"); 
console.log(mentors); */

app.get('/', (req, res) => res.send('Welcome to HYF Course App - using expressJS!'));

/***-----------------   Routing for Courses   -----------***/
router.route("/courses")
    .get((req, res) => {
        res.send(hyf_courses.getList());
    })
    .post((req, res) => {
        if (req.body) {
            res.status(200, "OK");
            hyf_courses.addCourse(req.body);
            res.send("Course is  added!")
        } else {
            res.status(500, " Can not read the requesst body");
        }
    });
router.route("/course/:title")
    .get((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_courses.getCourseByName(req.params.title));
        } else {
            res.status(404, "not found");
        }
    })
    .delete((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_courses.deleteCourse(req.params.title));
        } else {
            res.status(404, "not found");
        }
    })
    .put((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_courses.editCourse(req.params.title));
        } else {
            res.status(404, "not found");
        }
    });

/***-----------------   Routing for Mentors   -----------***/
router.route("/mentors")
    .get((req, res) => {
        res.send(hyf_mentors.getMentorList());
    })
    .post((req, res) => {
        if (req.body) {
            res.status(200, "OK");
            hyf_mentors.addMentor(req.body);
            res.send("Mentor is  added!")
        } else {
            res.status(500, " Can not read the request body");
        }
    });
router.route("/mentor/:title")
    .get((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_mentors.getMentorByName(req.params.title));
        } else {
            res.status(404, "not found");
        }
    })
    .delete((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_mentors.deleteMentor(req.params.title));
        } else {
            res.status(404, "not found");
        }
    })
    .put((req, res) => {
        if (req.params.title != " ") {
            res.status(200, "OK");
            res.send(hyf_mentors.editMentor(req.params.title));
        } else {
            res.status(404, "not found");
        }
    });


/***************************    main work area    ************************* */

app.use('/', router);
app.listen(port, () => console.log(`HYF course app listening on port ${port}!`))
