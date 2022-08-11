function make_avg(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const avg = sum / 3;
    return avg;
}

const result = make_avg(2, 4, 6);
console.log(result);