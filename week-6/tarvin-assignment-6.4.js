/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/
/*
============================================
; Title:  tarvin-assignment-6.4.js
; Author: David Tarvin
; Date:   20 January 2019
; Description: Nested Object Literals
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 6.4"));
console.log("");

// create object ticket
let ticket = {
  id: 202,
  name: 'David Niven',
  dateCreated: new Date().toLocaleDateString('en'),
  priority: 'high',
  // create nested object person
  person: {
    id: 28546,
    firstName: 'David',
    lastName: 'Niven',
    jobTitle: 'Associate Software Engineer Trainee'
  }
}

console.log('Ticket', ticket.id, 'was created on', ticket.dateCreated, 'and assigned to employee', ticket.person.firstName, ticket.person.lastName, '(' + ticket.person.jobTitle + ').');
