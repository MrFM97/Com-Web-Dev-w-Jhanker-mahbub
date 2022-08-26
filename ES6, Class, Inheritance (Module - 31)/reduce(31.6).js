// map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters
// const total = numbers.reduce((previous, current) => previous + current , 0);
const total = numbers.reduce((previous, current) => {
    console.log(previous, current); //0+1, 1+2, 3+3....
    return previous + current 
} , 0);
console.log(total);