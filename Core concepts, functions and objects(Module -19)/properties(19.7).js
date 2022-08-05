var shoppingCart = {
    books: 3, 
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
 
var propertyName = 'books';

var propertyValue = shoppingCart['mouse']
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

// set property values

shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
