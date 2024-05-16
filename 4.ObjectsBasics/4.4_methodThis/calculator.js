//Object method: this

//Create a calculator

/* 
    Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.

*/

"use strict"

let calculator = {
    read() {
        this.a = +prompt("input first number", 0);
        this.b = +prompt("input second number", 0);
    },
    sum() {
        alert("the sum of these two numbers is " + (this.a + this.b));
    },
    mul() {
        alert("the product of these two numbers is " + (this.ab = this.a * this.b));
    },
}

calculator.read();
calculator.sum();
calculator.mul();


// corr
//within the methods (functions with a specific context)
// sum() and mul() don't need to alert()
//instead
//its cleaner to make sum() and mul() return the results of their operations
//and then alert(calculator.mul()) & alert(calculator.sum)

// careful to not forget the , between funcs

