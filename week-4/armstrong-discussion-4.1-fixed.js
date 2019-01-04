/*
============================================
; Title:  Discussion 4.1 - Arrays
; Author: Tyler Armstrong
; Date:   03 January 2019
; Modified By: N/A
; Description: Showcases arrays.
;===========================================
*/

const header = require('../armstrong-header');

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
console.log(header.display('Tyler', 'Armstrong', 'Discussion 4.1') + "\n");


let drinks = [
  "Old Fashioned", 
  "Margarita",
  "Negroni",
  "Moscow Mule",
  "Whiskey Sour",
  "Mimosa",
  "White Russian",
  "Amaretto Sour",
  "Long Island Iced Tea",
  "Mojito"
];

/**
 * Params: array
 * Response: Value of array's index
 * Description: Returns a random drink from the drinks array
 */
function getDrink(drinks) {
  const drink = Math.floor((Math.random() * drinks.length));
  return drinks[drink];
}

console.log("Hey bartender! One " + getDrink(drinks) + ", please.");
