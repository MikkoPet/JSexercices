//Logical Operators

//A question about if

//Which of these alert s are going to execute?
//What will the results of the expressions be inside if(...)?

"use strict"

if (-1 || 0) alert( 'first' ); //executes 
//-1 in boolean returns true, OR searches for the first true value.

if (-1 && 0) alert( 'second' ); //doesn't execute
//&& seeks the first false, 0 returns false, so false is returned and the function isnt executes

if (null || -1 && 1) alert( 'third' ); //executes
//&& takes precedence and executes first
//it seeks the first false value
//both -1 and 1 return true
//in that case it returns the last true value
//it returns 1 as result
//|| then seeks the first true value, else itll return the last false one
//null returns false
//but 1 returns true
//1 (true) is returned to the if
//the alert then executes