console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.iscleaned;
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);