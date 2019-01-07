 /*
============================================
; Title:  tarvin-exercise-5.3.js
; Author: David Tarvin
; Date:   07 January 2019
; Description: Object Collections
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 5.3"));
console.log("");

const composers = [
    {
        firstName: 'John',
        lastName: 'Kukuzelis',
        genre: 'Medieval',
        rating: '4'
    },
    {
        firstName: 'Thomas',
        lastName: 'Campion',
        genre: 'Renaissance',
        rating: '6'
    },
    {
        firstName: 'Antonio',
        lastName: 'Vivaldi',
        genre: 'Baroque',
        rating: '8'
    },
    {
        firstName: 'Joseph',
        lastName: 'Haydn',
        genre: 'Classical',
        rating: '9'
    },
    {
        firstName: 'Franz',
        lastName: 'Schubert',
        genre: 'Romantic',
        rating: '10'
    }
]

console.log('-- COMPOSERS --');

// iterate through each object and list last name, genre and rating values
composers.forEach((composer) => console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating));
