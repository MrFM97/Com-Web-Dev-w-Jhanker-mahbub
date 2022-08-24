/* function add(first, second) {
    console.log(first, second);
    second = second || 0;
    if (second === undefined) {
        second = 0;
    }

    const total = first + second;
    return total;
}
 */

function add(first = 0, second = 36) {
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);

function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
}

const name = fullName('Gelam');
console.log(name);