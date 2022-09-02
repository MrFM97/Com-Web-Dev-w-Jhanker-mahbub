const numbers = [12, 54, 65, 3, 54];
/* for (const number of numbers) {
    console.log(number);
    
} */

// forof can not be used as objects
const bottle = { color: 'yellow', price: 50, iscleaned: true, capacity: 1 };

// first opton to loop through an object
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
    console.log(key);
}
/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/
for (const key of keys) {
    console.log(key, bottle[key]);
}

// for in loop
for (const key in bottle) {
    const value = bottle[key];
    console.log(keys, bottle[key]);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}