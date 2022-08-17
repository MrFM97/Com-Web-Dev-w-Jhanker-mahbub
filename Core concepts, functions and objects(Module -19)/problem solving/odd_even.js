/* Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */

function isEven(n) {
    return n % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }

