/*
============================================
; Title:  tarvin-assignment-5.4.js
; Author: David Tarvin
; Date:   07 January 2019
; Description: Filtering/Reducing Complex
;              Data Structures
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 5.4"));
console.log("");

// create objects that will be listed
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

console.log('-- COMPOSER BY RATING --');

// function to list objects with only rating and last name fields
let ratings = composers.map((composer) => {
  return console.log('Rating: ' + composer.rating + '\nComposer: ' + composer.lastName + '\n');
});

ratings.forEach((rating) => { });

console.log('-- COMPOSER BY GENRE --');

// function to list of objects with only genre and last name fields
let genres = composers.map((composer) => {
    return console.log('Genre: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n');;
})

genres.forEach((genre) => { });
