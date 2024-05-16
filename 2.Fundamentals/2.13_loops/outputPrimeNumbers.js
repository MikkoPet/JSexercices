//Loops: While and For

//Output prime number

/*
Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/

"use strict"

let getHighestNumber = +prompt("Until which number should we check for primes?", 10);
let numCheckPrime = 2

for(numCheckPrime; numCheckPrime <= getHighestNumber; numCheckPrime++) {
    let dividor = 2;
    for (dividor; dividor < numCheckPrime; dividor++){
        if (numCheckPrime % dividor == 0) break;
    }

    if (dividor == numCheckPrime) {
        alert(numCheckPrime + ' is a prime number.');
    }
}