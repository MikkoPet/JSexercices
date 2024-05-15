// Variables

//Uppercase Const?

/* 
Examine the following code:
```
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?
 */

"use strict"

// BIRTHDAY is a value that cannot change, its hard-set and independant from the code. 
// Hence, it can be uppercase.
// But age is calculated BY the code, a dependant on it.
// It should be lowercase

const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
