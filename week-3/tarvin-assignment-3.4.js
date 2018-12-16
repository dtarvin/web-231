/*
============================================
; Title:  Assignment-3.4.js
; Author: David Tarvin
; Date:   15 December 2018
; Description: Loops
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 3.4"));
console.log("");

var myNum = 8;

function match(match1, match2) {
  if (match1 === match2) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(match1, match2) {
  console.log(match1 + " does not match " + match2 + "!");
}

function logMatch(match1, match2) {
  console.log(match1 + " does match " + match2 + "!");
}

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

console.log("-- Displaying for loop --");

for (var i = 0; i < 10; i++) {
  let computerNumber = randomNumber();
  if (myNum === computerNumber) {
    logMatch(myNum, computerNumber);
  } else {
    logMismatch(myNum, computerNumber);
  }
}

console.log("\n-- Displaying while loop --");

let j = 0;
while(j < 10) {
  let computerNumber = randomNumber();
  if (myNum === computerNumber) {
    logMatch(myNum, computerNumber);
  } else {
    logMismatch(myNum, computerNumber);
  };
  j++;
}
