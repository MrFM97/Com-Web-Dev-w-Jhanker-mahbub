/* const numbers = [2, 8, 4, 6, 3];

console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled)
    }
    return output;
} */

function doubleItOld(num) {
    return num * 2;
}

const doubleIt = num => num * 2;

// const makedoubled = numbers.map(doubleIt);
const result = getDoubles(numbers);
console.log(result);
console.log(makedoubled);