//Loops: While and For

//Which values get shown by the "for" loop?

//For each loop, write down which values it is going to show, then compare with the answer.
//Both loops alert same values or not?

"use strict"

//1.
//The postfix form:

for (let i = 0; i < 5; i++) alert( i );

//2.
//The prefix form

for (let i = 0; i < 5; ++i) alert( i );

//1. alerts 0, 1, 2, 3, 4
//2. alerts 0, 1, 2, 3, 4
//in a FOR loop, the incrementation is executed at the very end of the loop,
//the prefix or postfix don't affect the comparison in the condition,
//as the increment is executed at the END of a loop,
//and the condition checked at the START of the following loop
//i in the condition then always takes its NEW value

//Output even numbers in the loop

//Use the for loop to output even numbers from 2 to 10

let evenNumber = 2 ;

for (evenNumber; evenNumber <= 10; evenNumber++) {
    if (evenNumber % 2 == 0) {
    alert(evenNumber);
    }
}