/*
============================================
; Title:  Tarvin_Exercise_2_3.js
; Author: Professor Krasso 
; Date:   06 December 2018
; Modified By: David Tarvin
; Description: Create and display a function
;              property.
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Week 2"));


// create a function to return my name
function myName() {
  return myName.David;
}

// create a property for the function myName
myName.David = "David Tarvin";

// display myName
console.log("\nHello " + myName() + "!");

