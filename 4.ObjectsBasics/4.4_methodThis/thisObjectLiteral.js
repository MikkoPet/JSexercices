//Object method "this"

//Using "this" in object literal

/* 
    Here the function makeUser returns an object.
What is the result of accessing its ref? Why?

 */

"use strict"

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // err undefined

  //corr
  // 'this' works not as a literal, but within a func
  //for it to call back to the object, we need ref to be a func as in

  /*
  function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name );
*/