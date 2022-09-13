// strongly typed language
/* int a = 5;
string b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopq";
bool c = true;
object student = { name: 'noya daman', id: 55}; */

// dynamically typed language

// premitive type
const a = 5;
const b = "abcdefghijklmnopqrstuvwxyz";

// non primitive type
const c = [45, 65, 48];
const student = { name: 'noya daman', id: 55 };


// console.log(typeof a, typeof b, typeof c, typeof student);

let x = 5; 
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'web developer' }
let q = p;
q = { job: 'frontend' }
console.log(p, q);