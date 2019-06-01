
const fs = require("fs");

class Courses {
    constructor(fileName) {
        this.fileName = fileName;
    }

    //1. method for to display courses details list
    getCoursesDetail() {
        const fileData = fs.readFileSync(this.fileName).toString();
        const allCourses = JSON.parse(fileData);
        return allCourses;
    }

    //2. method for to search course from the courses array
    getCourseDetails(courseName) {
        const allCourses = this.getCoursesDetail();
        return allCourses.find(course => course.courseName.toLowerCase() === courseName.toLowerCase())

        // Returns course if found, undefined otherwise
    }

    //3. method for to add course to the courses array
    addCourse(newCourse) {
        if (this.getCourseDetails(newCourse.name)) {
            return "Course already exists";
        }

        const allCourses = this.getCoursesDetail();
        allCourses.push(newCourse);

        const newFileJson = JSON.stringify(allCourses, null, 4);
        fs.writeFileSync(this.fileName, newFileJson);
        return "Course successfuly added";
    }
}

module.exports = Courses;
