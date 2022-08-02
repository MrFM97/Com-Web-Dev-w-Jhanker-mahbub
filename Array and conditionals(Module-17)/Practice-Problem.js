// Practice problem-1

var fruits = ['apple', 'Bananna', 'Orange'];

var position = fruits.indexOf(1);
fruits.splice(1, 1, 'Mango');
// console.log(position);

fruits.pop();
fruits.push('watermelon');

// console.log(fruits);

// Practice problem-2

var friends = 50;
var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if (friends <= 39) {
    console.log('You got F');
}
else if (friends >= 40 && friends < 50) {
    console.log('You got D')
}
else if (friends >= 50 && friends < 60) {
    console.log('You got C')
}
else if (friends >= 60 && friends < 80) {
    console.log('You got B')
}
else if (friends >= 80 && friends <= 100) {
    console.log('You got A')
}
else {
    console.log('You entered invalid number');
}


//Practice problem-3

var num1 = 82;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3){
    console.log('First Number is a large number');
}
else if(num2 > num1 && num2 > num3){
    console.log('Second Number is a large number');
}
else{
    console.log('Third number is large number');
} 

//Practice problem-4

var sides1 = 9;
var sides2 = 8;
var sides3 = 9;

if (sides1 == sides2 || sides2 == sides3 || sides3 == sides1) {
    console.log('triangle is Isosceles');
}
else {
    console.log('triangle is not Isosceles');
}

//text document practice problem - 1

var finalResult = 80;

console.log('Enter you number: ');

if(finalResult >=90 && finalResult < 100){
    console.log('You got A+');
}

else if(finalResult >=80 && finalResult <90){
    console.log('You got A');
}

else if(finalResult >=70 && finalResult <80){
    console.log('You got B');
}

else if(finalResult >=60 && finalResult <70){
    console.log('You got C');
}

else if(finalResult >=50 && finalResult <60){
    console.log('You got D');
}

else{
    console.log('fail korso, porte boso');
}

//text document practice problem - 2

var traffic = red;

if (traffic == "red") {
    console.log("Danger! Stop");
} 

else if (traffic == 'yellow') {
    console.log("Halt! Don't go");
}


else if (traffic == 'green') {
    console.log("Go Now!");
} 


else{
    console.log("Stay in house");
}