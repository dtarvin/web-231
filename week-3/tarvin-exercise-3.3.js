/*
============================================
; Title:  Tarvin_Assignment_2_4.js
; Author: Richard Krasso
; Date:   06 December 2018
; Modified by: David Tarvin
; Description: Turning if-else statements
;              into a switch statement
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 3.3"));
console.log("");

let eventKeyCode = 13;

// switch statement to determine key code response
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}