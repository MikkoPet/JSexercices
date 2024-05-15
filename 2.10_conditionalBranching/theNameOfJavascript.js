//Conditional branching

//The name of Javascript

//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

"use strict"

let getJavascriptNameOfficial = prompt("What is the official name of Javascript?","I don't know");

if (getJavascriptNameOfficial == "ECMAScript") {
    alert("Right!")
}
else {
    alert("You don't know? 'ECMAScript'!")
};