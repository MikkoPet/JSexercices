//Functions

//Is "else" required?

//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result:

"use strict"

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

//Will the function work differently if else is removed?

// With or without else, the two functions work identically
// 'return' interrupts the function, so the portion in 'else' only executes if age>18 is false


