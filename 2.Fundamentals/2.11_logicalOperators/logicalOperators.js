//Logical Operators

//What is the code below going to output?

"use strict"

alert( null || 2 || undefined ); // 2
// in an OR operation, the machine seeks the first "true". null in boolean returns false, the machine moves to the next value. 2 returns true, so it returns this value, 2 into the alert.

alert( alert(1) || 2 || alert(3) ); // 1 then 2
// it first executes alert(1) within the first alert(), displaying 1. then moves on, as methods in boolean return false, being worth "undefined". 2 returns true, so the alert activates with its value, hence 2 gets displayed. alert(3) isn't read as the operation found a true ahead of it, not processing anything coming after the 'true'

alert( 1 && null && 2 ); // null
// AND searches for the first false, 1 returns true, it continues, null returns false, so it sends its value to alert. "null" is alerted.

alert( alert(1) && alert(2) ); // 1 then undefined
// AND searched for the first false, it goes through the options one by one, alert(1) gets executed, then its "undefined" value returns false, so it sends the value (undefined) to be alerted.

alert( null || 2 && 3 || 4 ); // 3
// AND has higher precedence. 2 && 3 executes first, it searches for the first false, but finds none. in that case, it sends the last true value, hence 3.
// then, it executes the resulting null || 3 || 4, searching for the first true.
// null returns false, 3 returns true
// alert(3) executes
