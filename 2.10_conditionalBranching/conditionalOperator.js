//Conditional branching

//Rewrite if into ?

//Rewrite this if using the conditional operator '?':
/*
 let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

"use strict"

let result = (a = b < 4) ? "Below" : "Over";
