/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadi Feet', dadiFeet); */

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(dadaInches);
console.log('nana Feet',nanaFeet);