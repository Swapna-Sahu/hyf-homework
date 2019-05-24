// importing the objects from mentors.json and courses.json files
var mentors = require('./mentors.json');
var courses = require('./courses.json');

class course {
    constructor(name,duration,mentor) {
       this.name = name;
       this.duration = duration;
       this.mentor = mentor;
    }
    //1. method for to display courses name list
    getCourseList() {
        console.log(courses.map(course=>course.name));
    }

    //2. method for to display courses details list
    getCourseWithDetailList() {
        console.log(courses);
    }

    //3. method for to edit course details
    editCourse(modifiedCourse) {
        courses.forEach(element => {
           if(element.name===modifiedCourse.name) {
            element.name= mmodifiedCourse.name;
            element.duration= modifiedCourse.duration;
            element.mentor= modifiedCourse.mentor;
            console.log(element);
           }
        });       
      
    }
    //4. method for to add course to the courses array
    addCourse(course) {
        courses.push(course);
        console.log(courses);
    }

    //5. method for to search course from the courses array
    getCourseDetails(courseName) {
        //console.log(this);
        let searchedCourse = courses.filter(eachCourse => eachCourse.name === courseName)
        if(searchedCourse.length === 0)
        {
            console.log("No such course found.");  
        } else {
            console.log(searchedCourse);
        }
    }

    //6. method for to remove course to the courses array
    removeCourse(courseName) {
        courses = courses.filter(eachCourse => eachCourse.name != courseName)
        console.log(courses);
    }
}


class mentor {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        
    }

     //1. method for to display courses name list
    getMentorList() {
        console.log(mentors.map(mentor=>mentor.name));
    }

    //2. method for to display courses details list
    getMentorWithDetailList() {
        console.log(mentors);
    }

    //3. method for to edit mentor details
    editMentor(modifiedMentor) {
        mentors.forEach(element => {
           if(element.name===modifiedMentor.name) {
            element.name= modifiedMentor.name;
            element.courses= modifiedMentor.course;
            console.log(element);
           }
        });      
       
    }

    //4. method for to add mentor to the courses array
    addMentor(newMentor) {
        mentors.push(newMentor);
        console.log(mentors);
    }
   
    //5. method for to search mentor from the mentors array
    getMentorDetails(mentorName) {
        //console.log(this);
        let searchedMentor = mentors.filter(eachMentor => eachMentor.name === mentorName)
        if(searchedMentor.length === 0)
        {
            console.log("No such course found.");  
        } else {
            console.log(searchedMentor);
        }
    }

     //6. method for to remove course to the courses array
    removeMentor(mentorName) {
        mentors = mentors.filter(eachMentor => eachMentor.name != mentorName)
    }
}

let hyf_mentor = new mentor(); // created empty mentor instance
let hyf_course = new course(); // created empty course instance

console.log("To display courses name list");
hyf_course.getCourseList(); 
console.log("To display mentors name list");
hyf_mentor.getMentorList(); 

console.log("To display courses with details  list");
hyf_course.getCourseWithDetailList(); 
console.log("To display mentors with details list");
hyf_mentor.getMentorWithDetailList();

console.log("Called for to edit mentor Benjamin's course details");
let modifiedMentor =  {
    "name": "Benjamin",
    "course": ["HTML/CSS", "JS", "Database"], 
};
hyf_mentor.editMentor(modifiedMentor);

console.log("called to add course Angular to the courses array");
const newCourse =   {
    "title": "Angular",
    "duration": "8 weeks",
    };
hyf_course.addCourse(newCourse);

console.log("Called to search course NodeJS and NodeJ from the courses array");
hyf_course.getCourseDetails("NodeJS");
hyf_course.getCourseDetails("NodeJ");

console.log("Called to remove course Angular from courses array");
hyf_course.removeCourse('Angular');