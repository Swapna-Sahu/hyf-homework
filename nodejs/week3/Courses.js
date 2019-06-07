/******  file contains class Courses and create,read,update and delete methods *************/

fs = require("fs");   // to use fs library to modify the json file
const Mentors = require("./Mentors");
const mentors = new Mentors("./mentors.json");

class Courses {

    constructor(fileName) {
        this.coursesList = fileName;
    }

    // 1. get list of all courses
    getCourseList() {
        const fileData = fs.readFileSync(this.coursesList).toString(); // returns string
        const allCourses = JSON.parse(fileData); // returns object
        return (allCourses);
    }

    //2. get all courses including mentors
    getList() {
        let allCourses = this.getCourseList();
        allCourses.forEach(course => {
            course["mentors"] = mentors.getMentorsByCourseTitle(course.name);
        });
        return allCourses;
    }

    //3. get course by name Returns course if found, undefined otherwise
    getCourseByName(courseName) {
        const allCourses = this.getList();
        let serachedCourse = allCourses.find(course => course.name.toLowerCase() === courseName.toLowerCase())
        if (serachedCourse)
            return serachedCourse;
        else return ("Not found");

    }

    //4.add a new course to courses list
    addCourse(newCourse) {
        let allCourses = this.getList();
        if (this.getCourseByName(newCourse.name)) {
            return false;
        } else {
            allCourses.push(newCourse);
            const newFileData = JSON.stringify(allCourses, null, 2); // converting object into string with space 2
            fs.writeFileSync(this.coursesList, newFileData); // writing in the JSON file
            return true;
        }

    }

    //5. update the any one existing courses
    editCourse(course) {
        let serachedCourse = this.getCourseByName(courseName);
        if (serachedCourse) {
            serachedCourse = course;
            const newFileData = JSON.stringify(allCourses, null, 4);
            fs.writeFileSync(this.coursesList, newFileData);
            return true;
        } else {
            return false;
        }
    }

    //6. delete any one existing course
    deleteCourse(courseName) {
        let allCourses = this.getList();
        if (this.getCourseByName(courseName)) {
            allCourses = allCourses.filter(course => course.name != courseName);
            const newFileData = JSON.stringify(allCourses, null, 4); // converting object into string with space 4
            fs.writeFileSync(this.coursesList, newFileData); // writing in the JSON file
            return true;
        } else {

            return false;
        }

    }

}

module.exports = Courses;
