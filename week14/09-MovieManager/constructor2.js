
//In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.
var Student = require("./Student");
//The first constructor function is called “Student” and has the following properties within it...
function Class(Students, number, professor, roomnum){
    this.Students = ["Bob","Chris"]
    this.number = 2
    this.professor = "Adam"
}

// Name of the student
// Favorite subject
// Current GPA
// The second constructor function is called “Class” and has the following properties within it...

// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class
// BONUS: Make it so that that your application can take in user input to add new classes and new students to those classes.