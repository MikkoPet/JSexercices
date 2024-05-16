//Loops: While and For

//Last loop value

//What is the last value alerted by this code? Why?

"use strict"

let i = 3;

while (i) {
  alert( i-- );
}

//last alerted value: 1
//each run of the loop, the value of i is checked
//if it returns a value converted to true, aka a non zero value,
//its value is alerted, then decremented.
//
//after three runs, its value decrements to 0
//0 returns a false, which stops the while loop
//
//the value of i before its last decrementation to 0 was 1
//the last alert will have then shown 1


//Which values does the while loop show?
/* For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not? 
*/

// 1. The prefix form ++1

let ibis = 0;
while (++ibis < 5) alert( i );

// 2. The postfix form 1++

let iter = 0;
while (iter++ < 5) alert( i );

//1.
//alerts 1, 2, 3, 4
//the value of i used for the comparison is the one AFTER the incrementation
//once it reaches 5, the loop ends as 5 will be the value used for the comparison, and 5<5 returns a false
//2.
//alerts 1, 2, 3, 4, 5
//the value of i used for the comparison is the one PREVIOUS to the incrementation
//the one sent to the alert is the one after the incrementation thought, 
//
//whereas the loop 1. compares 1<5 in its first run, then alerts 1
// the loop 2. compares 0<5, the old value of i, then alets 1, the new value
//in the fifth run, the end value of i is 5 in both cases
//but the returned value used in the comparison is 5<5 in the loop 1. which returns a false, yet 4<5 in the loop 2. which returns a true
//thus the second loop runs for one loop more