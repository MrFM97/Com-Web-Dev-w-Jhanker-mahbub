/* function factorial(number){
    let num = 1;
    let result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    }
    return result;
} */

// while reverse
function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const output =  factorial(7);