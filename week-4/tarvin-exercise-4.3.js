/*
============================================
; Title:  tarvin-exercise-4.3.js
; Author: David Tarvin
; Date:   28 December 2018
; Description: Array filtering
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 4.3"));
console.log("");

// create array of 5 vehicles
const vehicle = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

// create function to display a list of vehicles
function displayVehicleList(vehicleArray) {
    console.log('-- DISPLAYING ARRAY ITEMS --');
    for (let i = 0; i < vehicleArray.length; i++) {
        console.log(vehicleArray[i]);
    }
    console.log('');
}

// create function to see if a specific vehicle is in a list of vehicles
function getValue(vehicleArray, oneVehicle) {
    console.log('-- SELECTED VALUE --');
    for (let i = 0; i < vehicleArray.length; i++) {
        if (oneVehicle === vehicleArray[i]) {
            console.log(oneVehicle);
        }
    }
    console.log('');
}

displayVehicleList(vehicle);
    
getValue(vehicle, 'Motorcycle');

getValue(vehicle, 'Bus');
