//Objects

//Check for Emptiness

/* 
    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

 */

"use strict"
/*
let Empty = {};
let nonEmpty = {name : "John"};
*/

function isEmpty(obj) {
    for (let key in obj){
        return !!key;
    }
    return false;
}

/*
alert( isEmpty(Empty) );
alert ( isEmpty(nonEmpty));
*/