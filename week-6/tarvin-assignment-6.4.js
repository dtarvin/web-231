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
