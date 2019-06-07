/******  file contains class Mentors and create,read,update and delete methods *************/
fs = require("fs");   // to use fs library to modify the json file


class Mentors {

    constructor (fileName) {
        this.mentorsList = fileName;
    }

    // 1. get list of all Mentors
    getMentorList() {
        const fileContent = fs.readFileSync(this.mentorsList).toString();
        let allMentors = JSON.parse(fileContent);
        return allMentors;
    }

    // 2. get mentors by course tiltle 
    getMentorsByCourseTitle(courseName) {
        let mentorsName = [];
        let mentors = this.getMentorList();
        mentors.forEach(mentor => {
            if (mentor.courses.indexOf(courseName) > -1)
                mentorsName.push(mentor.name)
        });
        return mentorsName;
    }
        
    

    //3. get Mentor by name Returns Mentor if found, undefined otherwise
    getMentorByName(mentorName) {
        const allMentors = this.getMentorList();
        return allMentors.find(mentor => mentor.name.toLowerCase() === mentorName.toLowerCase());
    }

    //4.add a new Mentor to Mentors list
    addMentor(newMentor) {
        let allMentors = this.getMentorList();
        if (this.getMentorByName(newMentor.name)) {
            return false;
        } else {
            allMentors.push(newMentor);
            const newFileData = JSON.stringify(allMentors, null, 4); // converting object into string with space 4
            fs.writeFileSync(this.mentorsList, newFileData); // writing in the JSON file
            return true;
        }
    }

    //5. update the any one existing Mentors
    editMentor() {}

    //6. delete any one existing Mentors
    deleteMentor (mentorName) {
        let allMentors = this.getMentorList();
        if (this.getMentorByName(mentorName)) {
            allMentors = allMentors.filter(course=> course.name != mentorName);
            const newFileData = JSON.stringify(allMentors, null, 4); // converting object into string with space 4
            fs.writeFileSync(this.mentorsList, newFileData); // writing in the JSON file
            return true;
        } else {
            
            return false;
        }
    }

}

module.exports = Mentors;