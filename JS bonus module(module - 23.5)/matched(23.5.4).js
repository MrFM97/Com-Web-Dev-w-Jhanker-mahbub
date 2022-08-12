// const numbers = [45,65,23,98,19];

// for (let i = 0; i < numbers.length; i++) {
//     const numbers = numbers[i];
//     console.log(Number);
// }

// for(const Number of numbers){
//     console.log(number);
// }

const products = [
    {id: 1, name: 'walton phone', price: 19000},
    {id: 2, name: 'xiaomi phone', price: 23000},
    {id: 3, name: 'dell inspiron', price: 45000},
    {id: 4, name: 'nokia oldagee', price: 8000},
    {id: 5, name: 'nothing phone', price: 65000},
    {id: 6, name: 'walton laptop', price: 52000},
];

for (const product of products) {
    console.log(product);
}
function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowercase().includes(search.toLowercase())) {
           matched.push(product);
        }
    }
}

const result = matchedProducts(products, 'laptop');
console.log(result);