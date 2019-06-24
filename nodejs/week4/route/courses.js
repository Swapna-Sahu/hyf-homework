const express = require("express");
const app = express();
const router = express.Router();

const Courses = require("../data/Courses");
let hyf_courses = new Courses("./courses.json");

const AlreadyExistsError = require("../errors/AlreadyExistsError");

var { Validator, ValidationError } = require('express-json-validator-middleware');
var validator = new Validator({allErrors: true});
var validate = validator.validate;

const courseSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        duration: {
            type: 'number'
        }
    },
    required: ['name', 'duration'],
    additionalProperties: false
  };


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
    module.exports = router;