var class07Students=[]; // declaring the array globally

function addStudentToClass(studentName) {
  if (studentName === "") {   // checking for empty string
    console.log("Name cannot be empty");
    return;
  }
  if (class07Students.includes(studentName)) {  // checking for duplicate
    console.log("Student " + studentName + " is already in the class");
    return;
  }
  if (studentName === "Queen") {  // Queen has to enter in the array
    class07Students.push("Queen");
    return;
  }
  if (class07Students.length > 5) { // limiting the array size
    console.log("Cannot add more students to class 07");
    return;
  }

  return class07Students.push(studentName); // adding student name in the array
}

function getNumberOfStudents() {
    return class07Students.length // class size
}
addStudentToClass("hi");
