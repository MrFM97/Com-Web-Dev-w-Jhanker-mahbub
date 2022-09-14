/* function kitchen(){
    let roast = 0;
    return function(){
       roast++;
       return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer()) */;

function greetings(person){
    console.log(person);
}

// const numbers = [45];
// const laptop = {price: 45000, brand: 'walton', memory: '16gb'};

function greetingHandler(name){
    console.log('good noon', name);
}

function greetEvening(name) {
    console.log('Good evening', name);
}

function greetNights(name) {
    console.log('Good night', name);
}


greetings(greetingHandler, 'Tom Hanks');
greetings(greetingHandler, 'Tom cruise');
greetings(greetEvening, 'Tom Browdy');
greetings(greetNights, 'Tom solaiman');

function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);