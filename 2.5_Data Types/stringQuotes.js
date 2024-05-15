//Data Types

//String Quotes

/* What is the output of the script:
```
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```
*/

"use strict"

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello "name"

alert( `hello ${name}` ); // hello Ilya

// in the first alert, 1 is a number. the alert thus displays hello then that number. 
// the second alert displays hello, then the string "name". the double quotes indicate its a string and not the variable we declared earlier
// finally, the last alert does display hello then the content of our variable, as name without the double quotes refer to a var