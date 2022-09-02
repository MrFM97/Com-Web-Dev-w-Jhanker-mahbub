// create the object using object literals
const player = {};
player.name = 'small Nirob'; //properties
player.speciality = 'batsman';
player.bat = function () {
    console.log('swing your bat!');  //method
}
console.log(player);
player.bat();

const student = {
    name: 'Pandey', Job: 'Khay andey', ball: function () {
        console.log('throw the ball!');
    },
    salary: 100000
};

// object constructor
const person = new Object();
console.log(person);

// object create method

// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name); // vitor e properties na thakle console e undefined dekhabe

// class

class Person{
    name = 'abul';
    adress = 'sodor ghat'; 
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);

// Function (wont use this in normal cases)

function car(modal, price) {
    this.modal = modal;
    this.price = price;
}

const tesla = new car('elon', 32);