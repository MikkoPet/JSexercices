//Loops: While and For

//Repeat until the input is correct

/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

"use strict"

let getNumber = 0;

while(getNumber <= 100) {
    getNumber = +prompt("Input a number GREATER than 100:", "0");
}

//correction using do while 
//https://javascript.info/while-for

let getNumber2;

do {
    getNumber2 = prompt("Enter a number greater than 100", 0);
} while (getNumber2 <= 100 && getNumber2);