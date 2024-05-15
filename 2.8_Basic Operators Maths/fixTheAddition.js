//Basic operators, maths

//Fix the Addition

/* Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

```
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b);
```

*/

"use strict"

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); 

//prompt values are always String, they must be converted to Number to be added, else they'll be concatenated, hence "12"
//the "+" symbol can enact a Number() conversion, +prompt get a value from the user and immediatly convert it to its Number equivalent
