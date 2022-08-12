const student = {
    name: 'sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamin'],
    movies: [{name: 'no. 1', year: 2005}, {name : 'king khan', year: 2018}],
    act: function () {
        console.log('acting like shakib khan');
    },
    car: {
        brand: 'tesla',
        price: 6515616515,
        made: 2021,
        manufacturer: {
            name:'tesla',
            CEO: 'Elon mask',
            country: 'USA'
        }
    }
}

// console.log(student.car);
const result = nayok.act();
console.log(nayok.act);