//Constructor, operator "new"

//New Calculator

/* 

Create a constructor function Calculator that creates objects with 3 methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.

*/

"use strict"

function Calculator() {

    this.read = function() {
        this.a = +prompt("first number:", 0);
        this.b = +prompt("second number", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//cor notes: this.funct takes no ()
//the () is assigned in the = function()
//in the constr function, object attributes are split by ; not ,
