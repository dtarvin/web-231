 /*
============================================
; Title:  tarvin-exercise-5.2.js
; Author: David Tarvin
; Date:   28 December 2018
; Description: ES5 Built-In Functions
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 5.2"));
console.log("");

const favoriteFoods = ['Pizza', 'Nachos Bellgrande', 'Peanut Buster Parfait', 'Chili', 'Pumpkin Pie'];

favoriteFoods.forEach((foods) => console.log(foods));
