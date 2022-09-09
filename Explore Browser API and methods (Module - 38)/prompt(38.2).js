// alert('eitai amar first alert')

const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('ki dosto ki khbr?')
    }
    else {
        alert('Tor sathe kotha nai Jaah!');
    }
}

const askSomething = () => {

    const decision = confirm('Are you coming to the picnic?');
    console.log(decision);
    if (decision === true) {
        alert('Dosto fast 500 taka bkash kor');
    }
    else {
        alert('Tui ar kothai bolis na');
    }
}

const getUserinfo = () => {
   const name = prompt('Tell us your name please...');
    console.log(name);
    if (name) {
        console.log('Yaay! you entered your name');
    }
    else { 
        console.log('Alas! Eta tumi ki korla?');
    }
}