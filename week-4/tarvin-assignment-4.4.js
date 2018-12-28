 /*
============================================
; Title:  tarvin-assignment-4.4.js
; Author: David Tarvin
; Date:   28 December 2018
; Description: Predicates
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 4.4"));
console.log("");

const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada',];

// create function to list states in original order
function printOriginalArray(states) {
    console.log('-- ORIGINAL ARRAY --');
    for (let i = 0; i < states.length; i++) {
        console.log(states[i]);
    }
}

printOriginalArray(states);

console.log('');

// create function to print states in alphabetical order
function sortOriginalArray(states) {
    console.log('-- SORTED ARRAY --');
    const sortedStates = states.sort();
    for (let i = 0; i < sortedStates.length; i++) {
        console.log(sortedStates[i]);
    }
}

sortOriginalArray(states);

console.log('');

// create function to compare if two strings of state names are the same
function getState(stateFromArray, stateToSearchFor) {
    if (stateFromArray === stateToSearchFor) {
        return true;
    }
}

// create sub-array of any state names from the original array
// that match the state name I'm searching for 
const filteredStates = states.filter(function(x) {
    return getState(x, 'Iowa');
})

// print the sub-array of state names that match the state name
// I am searching for
console.log('-- SELECTED VALUE --');
for (let i = 0; i < filteredStates.length; i++) {
    console.log(filteredStates[i]);
    // console.log(filteredStates[0]) would also return correct result,
    // but used loop instead so if original array is modified to
    // include searched-for state more than once, it will list every
    // instance of searched-for state appearing in original array
}
