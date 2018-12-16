/*
============================================
; Title:  Balmaceda-Discussion-3.1
; Author: Griselda Balmaceda
; Date:   6 December 2018
; Description:A javascript program containing a for,while,if or switch statment with two errors
;===========================================
*/




const header = require('./balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Week 2"));
console.log("The player with the dice with the highest number Wins!")

dice1=Math.random(5);
dice2=Math.random(5);


console.log("Player 1: " + dice1);
console.log("Player 2: " + dice2);



if(dice1>dice2){
    console.log("Player 1 Wins!")
} else if(dice2>dice1){
    console.log("Player 2 Wins!")
} else{
    console.log("There is a tie!")
}




/*The following is an example of what the output should look like*/
/***
 * player1: 5
 * Player2: 3
 * Player One Wins!!
 *
 *
 *
 */
