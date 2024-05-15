//Basic operators, maths

//Type convertion

//What are results of these expressions?

"use strict"

"" + 1 + 0 // "10" , String + implies concatenation, "" + 1 means "" + "1", then "1" = "0"
"" - 1 + 0 // -1 , unlike + which can both operate numbers and strings, - only substracts numbers, converting strings into number thus "" - 1 - 0 is 0 - 1 - 0
true + false // 1 , booleans are converted to numbers by mathematical operators. true is converted to 1 and false to 0, hence 1 + 0
6 / "3" // 2 , same rules as the - operator
"2" * "3" // 6 , same rules as the - and * operator
4 + 5 + "px" // "9px" , 4 and 5 both are numbers, theyre thus added into 9. but "px" is a string, so their sum is converted to a number to be concatenated
"$" + 4 + 5 // "$45" , here, the concatenation happens first, and spreads to all following operations
"4" - 2 // 2 , see second operation
"4px" - 2 // NaN , the numerical conversion is at play, but "4px" is not a number, hence converts to NaN. All following numerical operations involving it will then return NaN
"  -9  " + 5 // " -9  5" , this is a concatenation, the spaces are part of the string and so 5 is merged onto the string after the last space
"  -9  " - 5 // -14 , this is a substraction, spaces in " -9  " are ignored in the convertion into -9
null + 1 // 1 , null is converted into a number. its numerical value is 0
undefined + 1 // NaN , undefined is converted into a number, its value is NaN
" \t \n" - 2 // -2 , the string is converted into a number. it contains only invisible character, so its returned value is 0