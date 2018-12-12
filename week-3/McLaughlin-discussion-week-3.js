/*
============================================
; Title:  functions.js
; Author: Serena McLaughlin
; Date:   12 December 2018
; Modified by: David Tarvin
; Description: Fixing control statements
;===========================================
*/

//Header

const header = require('../McLaughlin-header.js');

console.log(header.display("Serena", "McLaughlin", "Exercise 3.1"));
console.log("\n");


//Control Statments

var z = 5;
if (z == 3) {
  console.log("Hello")
}
else {
  console.log("Bye");
}

var hour = new Date().getHours(); 
if (hour > 02) {
  console.log("Good night");
}