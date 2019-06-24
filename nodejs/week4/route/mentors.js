const express = require("express");
const app = express();
const router = express.Router();

const Mentors = require("../data/Mentors");
let hyf_mentors = new Mentors("./mentors.json");

var { Validator, ValidationError } = require('express-json-validator-middleware');
var validator = new Validator({allErrors: true});
var validate = validator.validate;

const mentorSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        course: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'string'
            }
        }
    },
    required: ['name', 'course'],
    additionalProperties: false
};

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

    module.exports = router;