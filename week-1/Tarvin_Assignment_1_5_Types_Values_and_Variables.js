/*
============================================
; Title:  Assignment 1.5
; Author: Richard Krasso
; Date:   29 November 2018
; Modified By: David Tarvin
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "David";
var myLastName = "Tarvin";
var todaysDate = new Date().toLocaleDateString('en-us');
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var employeeFirstName = ["Andrew", "Brian", "Clark", "Donald", "Edward"];
var employeeLastName = ["Anderson", "Blakely", "Creed", "Douglas", "Eagleton"];
var employeeMiddleName = ["Albert", "Bruce", "Clayton", "Drew", "Emmet"];
var streetAddress = ["102 Potter Lane", "221b Baker Street", "4026 N. 94th Street", "360 Balder Cir", "500 Rockefeller Plaza"];
var city = ["Boston", "Philadelphia", "Omaha", "Bellevue", "New York"];
var state = ["MA", "PA", "NE", "WA", "NY"];
var payRate = [9.5, 10.25, 11, 13.3, 15];
var hireDate = [new Date(2010, 0, 15), new Date(2011, 4, 19), new Date(2013, 2, 26), new Date(2016, 9, 3), new Date(2018, 10, 7)];

for (var i = 0; i < 5; i++) {
    console.log("First Name: " + employeeFirstName[i]);
    console.log("Last Name: " + employeeLastName[i]);
    console.log("Middle Name: " + employeeMiddleName[i]);
    console.log("Address: " + streetAddress[i] + " " + city[i] + ", " + state[i]);
    console.log("Pay Rate: $" + payRate[i].toFixed(2));
    console.log("Hire Date: " + hireDate[i].toLocaleDateString('en-us') + "\n");
}

// end of program 




 