/*
============================================
; Title:  tarvin-exercise-7.2.js
; Author: David Tarvin
; Date:   22 January 2019
; Description: Constructor Functions
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 7.2"));
console.log("");

function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [
    new employee(101, "Keith", "Ady", "Tech Lead"),
    new employee(202, "Kyle", "Schultz", "Senior Software Engineer"),
    new employee(303, "Ryan", "Borgelt", "Software Engineer"),
    new employee(404, "David", "Tarvin", "Associate Software Engineer"),
    new employee(505, "Jim", "Wilcox", "Senior Architect")
]

function listEmployees(employees) {
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].id, employees[i].firstName, employees[i].lastName, employees[i].title);
    }
}
listEmployees(employees);
