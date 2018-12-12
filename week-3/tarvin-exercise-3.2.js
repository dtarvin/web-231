/*
============================================
; Title:  Exercise-3.2.js
; Author: David Tarvin
; Date:   11 December 2018
; Description: Displays true or false
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Week 3"));
console.log("");

var truck = "Truck", car = "Car";
var bike1 = "Bike", bike2 = "Bike";
var four = "Four", three = "Three";

function match(match1, match2) {
  if (match1 === match2) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(match1, match2) {
  console.log(match1 + " and " + match2 + " do not match!");
}

function logMatch(match1, match2) {
  console.log(match1 + " and " + match2 + " do match!");
}

console.log(match(truck, car));
console.log(match(bike1, bike2));

if (match(truck, car)) {
  logMatch(truck, car);
} else {
  logMismatch(truck, car);
}

if (match(bike1, bike2)) {
  logMatch(bike1, bike2);
} else {
  logMismatch(bike1, bike2);
}

if (match(four, three)) {
  logMatch(four, three);
} else {
  logMismatch(four, three);
}