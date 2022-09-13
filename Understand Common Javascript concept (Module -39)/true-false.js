const x = 's';
if (x) {
    console.log('value of x is true');
}
else {
    console.log('value of x is false');

}

// Check falsy
const y = '';
if (!x) {
    console.log('value is false'); 
}

//Truthy value checker
/* 1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string 
4. '0', 'false'
5. {}
6. []
*/

// Falsy value checker
/* 1. false
2. 0
3. '' (empty string)
4. undefined
5. null*/