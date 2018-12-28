/*
============================================
; Title:  tarvin-exercise-4.2.js
; Author: David Tarvin
; Date:   28 December 2018
; Description: creating and using array
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 4.2"));
console.log("");

// create the array
const pieceOfFruit = ['apple', 'banana', 'cherry', 'orange', 'plum'];

// create function to list all items in array
function getFruit(fruit) {
    for (var i = 0; i < fruit.length; i++) {
        console.log(fruit[i]);
    }
}

// call the getFruit function
getFruit(pieceOfFruit);

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/