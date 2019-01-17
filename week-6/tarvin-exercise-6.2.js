 /*
============================================
; Title:  tarvin-exercise-6.2.js
; Author: David Tarvin
; Date:   17 January 2019
; Description: Objects and Built-In Objects
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 6.2"));
console.log("");

function getGrade(score) {
    if (score < 0 || score > 100) {
        throw 'OutOfBoundsException';
    }
    else {
        switch(true) {
            case (score >= 90):
                console.log('You got an A!');
                break;
            case (score >= 80):
                console.log('You got a B');
                break;
            case (score >= 70):
                console.log('You got a C');
                break;
            case (score >= 60):
                console.log('You got a D');
                break;
            default:
                console.log('You FAILED!!!');
        }
    }
}

try {
    var x = 102;
    getGrade(x);
}

catch(e) {
    console.log("Catch clause: " + e);
}

finally {
    console.log("Finally clause reached...");
}
