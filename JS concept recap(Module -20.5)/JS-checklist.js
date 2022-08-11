// 3 declairs
var aske = 55;
let amar = 'Murta';
const mon = true;

// Lopp (1-100)
for (let i = 1; i <= 100; i++) {
//    console.log(i);  
}

// Odd number (50 - 80)

for (let index = 50; index < 80; index++) {
    index = index + 1;
    // console.log(index);  
}

// তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 

function threeNumbers(a, b, c) {    
    const number = a + b + c; 
    return number; 
}
const result = threeNumbers(4, 5, 9);
console.log(result);