function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// add onclick function
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// make-pink grabber
const makePinkButton = document.getElementById('make-pink');
makePinkButton.onclick = makePink;
    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }

// purple grabber
const makePurpleButton = document.getElementById('make-pink');
makePurpleButton.onclick = makePurple;
    function makePurple(){
        document.body.style.backgroundColor = 'purple';
    }
