//Basic operators, maths

//The postfix and prefix form

//What are the final values of all variables a, b, c and d, in the code below?

"use strict"

let a = 1, b = 1;

let c = ++a; // a = 2, c = 2
let d = b++; // d = 1, b = 2

// the PREFIX ++ increments the value of a variable by one, and sends out the new value
// as an easy way to remember: it first does the operation (++) then "speaks" the variable (a)
// the POSTFIX first "speaks" the variable, then increments it (a++)
// when c = ++a , it thus becomes the New value of a, 1+1, so 2.
// a is also now assigned two, as it was incremented.
// but in d's case, it first took the value of b, before b was incremented
// d is assigned the old value, 1, while b is assigned its own incremented value, 1+1 = 2