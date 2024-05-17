//Constructor, operator "new"

//Two functions - one object

/* 
    Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

    If it is, then provide an example of their code.

*/

"use strict"

//a constructor function must be used
//when it returns an object, "new" will return the object
//two fucntions can return the same object

let obj = {};

function A() { return obj; }
function B() { return obj; }


