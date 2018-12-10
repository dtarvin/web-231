/*
============================================
; Title:  Tarvin_Assignment_2_4.js
; Author: Professor Krasso
; Date:   06 December 2018
; Modified By: David Tarvin
; Description: Creating functions with and
;              without parameters
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Week 2"));

// create function to return first and last name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// create function to return a new date
function dateWriter(year, month, day) {
  return new Date(year, month, day).toLocaleDateString('en');
}

// create function to format and return a number
// with a fixed number of decimal places
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// create function to turn a string into an integer
var numInt = function convertToInt(string) {
  return parseInt(string);
}

// create function to turn a string into a float
var numFloat = function convertToFloat(string) {
  return parseFloat(string);
}

console.log("Hello my name is", fullName("David", "Tarvin!"), "\n");

console.log("Today's date is", dateWriter(2018, 11, 6), "and the current temperature is", formatNumber(33.526, 1), "degrees.\n");

console.log("I am", numInt("49.4"), "years old and my savings account goal is", numFloat("842.57"), "dollars.");


