var numbers = [78, 45, 98, 45];
numbers.push(63);
console.log(numbers);

var friends = ['balam', 'kalam', 'salam'];
friends.push('gelam');
friends.push('pailam');
console.log(friends);

// use pop to get rid of the last element
console.log(numbers);
numbers.pop();
var element = numbers.pop();
console.log(numbers);
console.log(element);