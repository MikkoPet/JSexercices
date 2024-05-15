//Conditional branching

//Show the Sign

/* Using if..else, write the code which gets a number via prompt and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.
*/

"use strict"

let getNumber = +prompt("Please input a number of your choice:")

if (getNumber > 0){
    alert(1);
}
else if (getNumber < 0){
    alert(-1);
}
else if (getNumber == 0){
    alert(0);
}