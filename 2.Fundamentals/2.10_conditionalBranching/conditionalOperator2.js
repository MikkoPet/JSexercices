//Conditional branching

//Rewrite if into ?

//Rewrite this if else using multiple ternary operators '?':
//For readability, it's recommended to split the code into multiple lines.
/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

"use strict"

let message = (login == "Employee") ? 'Hello' : 
            (login == "Director") ? 'Greetings' :
            (login == '') ? "No login" : 
            "";
