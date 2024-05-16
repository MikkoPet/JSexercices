//Coding Style

//Bad Style

//What’s wrong with the code style below?

"use strict"

function pow(x,n) //missing spaces between args
{ //the bracket should be placed on the same line as the function's declaration
  let result=1; //needs spacing around operator
  for(let i=0;i<n;i++) {result*=x;} // no spaces
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') //accepted but can be newlined for each var
if (n<=0) //no spacing around the operator, lacks line break to separate if.
{ //should be with the if
    //below: needs line breaks within the string for readability
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else //else needs to be with its opening bracket, and can be brought up to be
    //with the closing bracket of if
{
  alert(pow(x,n)) //lacks spacing. missing semicolon
}

//BETTER VERSION:
/*
function pow(x, n) {
  let result=1;
  for (let i = 0; i < n; i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater 
        than zero`);
} else {
  alert( pow(x, n));
}
*/