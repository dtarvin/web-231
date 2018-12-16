/*
============================================
; Title:  Control Statements
; Author: Andrew Hemminger
; Date:   15 December 2018
; Modified by: David Tarvin
; Description: Sample program with errors.
;===========================================
*/
// var header = require('../tarvin.js');
// console.log(header.display("Andrew", "Hemminger", "Exercise 3.1"));
// console.log('\n');

// Start program

var x = 0,
    y = 10;


while (x < y || x < x - y) {
  console.log("x = " + x);
  x++;
  console.log(y - x + " more iterations to go\n");
}

var z = "COMPLETE!";
console.log(z);

// End program
