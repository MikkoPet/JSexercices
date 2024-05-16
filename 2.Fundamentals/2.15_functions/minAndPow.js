//Functions

//Function min
//Write a function min(a,b) which returns the least of two numbers a and b.

"use strict"

function min(a,b){
    return a < b ? a : b;
}

//Function POW
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
//Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
//P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x,n){
    return x**n;
}

let x = +prompt("Enter the first number");
let n = +prompt("Enter the power.");

if(n<1){
    alert("We do not support negative values")
} else {
alert(pow(x,n));
}