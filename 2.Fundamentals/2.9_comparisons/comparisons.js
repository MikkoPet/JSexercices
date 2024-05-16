//Comparisons

//Comparisons

//What will be the result for these expressions?

"use strict"

5 > 4 // true, both are numbers, the comparison is simply mathematical
"apple" > "pineapple" // false, both are string, the value of each character is compared one by one. a has a lower value than p in the unicode table. hence the operation is false
"2" > "12" // true, both are strings, so the characters are compared one by one. 2 is of greater value than 1 in the unicode table. the operation is true
undefined == null // true, undefined and null are a special case where they specifically are equal to each other
undefined === null // false, the strict operator compares types first. both undefined and null are their own types, so theyre not strictly equal
null == "\n0\n" // false, null only is equal to undefined
null === +"\n0\n" // false, null is of null type, and "\n0\n" is a string. theyre of two different types, they're not strictly equal.
