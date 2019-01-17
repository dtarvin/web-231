 /*
============================================
; Title:  tarvin-assignment-4.4.js
; Author: David Tarvin
; Date:   28 December 2018
; Description: Objects and Built-In Objects
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Discussion 6.1"));
console.log("");

var location = Object.create({"country":"Australia", "city":"Sydney"});
location.street = "Dawson";
var coordinates = Object.create(null);
coordinates.x = 1;
coordinates.y = 2;
console.log(coordinates);
console.log(coordinates.z);
console.log(coordinates.x, coordinates.y);
console.log(location);
console.log('1234 ' + location['street'] + ' Street, ' + location['city'] + ', ' + location['country']);

console.log('location is ' + location);
console.log('coordinates is ' + coordinates);

