/* option 1: directly set on the HTML element
<button onclick="console.log(65)">Another button</button> */

/* Option 2: add onclick function on the HTML Element
<button onclick="makeRed()">Red button</button> */

/* option 3(lesser use): 
const makePurpleButton = document.getElementById('make-pink');
makePurpleButton.onclick = function makePurple() {
        document.body.style.backgroundColor = 'purple';
} */


function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// add onclick function
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// make-pink grabber
const makePinkButton = document.getElementById('make-pink');
makePinkButton.onclick = makePink;
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// purple grabber
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// make-orange
const orangeButton = document.getElementById('make-orange');
orangeButton.addEventListener('click', makeOrange);

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}

// make-green
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// make-goldenrod - will use this frequently
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})