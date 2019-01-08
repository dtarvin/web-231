/*
============================================
; Title:  tarvin-discussion-5.1.js
; Author: David Tarvin
; Date:   08 January 2019
; Description: Advanced Arrays
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Discussion 5.1"));
console.log("");

var coffees = {
    {
        coffeeType: 'New England',
        roastType: 'light brown'
    },
    {
        coffeeType: 'American',
        roastType: 'medium brown'
    },
    {
        coffeeType: 'Viennese',
        roastType: 'medium dark brown'
    },
    {
        coffeeType: 'Turkish',
        roastType: 'dark brown'
    },
    {
        coffeeType: 'Italian',
        roastType: 'very dark brown'
    },
    {
        coffeeType: 'French',
        roastType: 'black-brown'
    }
}

console.log('-- Different types of coffee and their roast levels');

coffees.forEach(coffee) => {
    console.log(coffee.coffeeType + ' is a type of ' + roastType + ' roast.');
});