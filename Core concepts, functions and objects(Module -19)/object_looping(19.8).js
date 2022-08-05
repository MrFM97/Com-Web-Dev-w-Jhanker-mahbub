var shoppingCart = {
    books: 3, 
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen', 'mouse'];
for (let i = 1; i < keys.length; i++){
   var propertyName = keys[i];
   var propertyValue = shoppingCart[propertyName];
   console.log(propertyName, propertyValue);
}
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45, 
    karim: 78, 
    jamal: 12,
    robi: 32

}

// For in loop
for (var propertyName = 0; index < array.length; index++) {
    const element = array[index];
    key
}