const numbers = [2, 8, 4, 6, 3];

// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled)
    }
    return output;
}

 function doubleItOld(num) {
    return num * 2;
}

const doubleIt = num => num * 2;

const makedoubled = numbers.map(doubleIt);
const result = getDoubles(numbers);
console.log(result);
console.log(makedoubled);

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);