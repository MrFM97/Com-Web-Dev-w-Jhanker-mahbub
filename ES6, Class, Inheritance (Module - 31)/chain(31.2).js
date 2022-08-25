const users = [ {id: 1, name: 'abul', job: 'doctor'} ]
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'abul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
}

const firstJob = (data.data[0].job);
console.log(firstJob);

const user = {
    id : 5001,
    name: 'Thomas Alva Edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'second floor',
            third: 'right side of the floor',
        },
        postOffice: 'cantonment',
        city: 'Dhaka',
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);