// [45, 21, 6, 98, 56]

const phones = [
    {name: 'Realme', camera: 64, storage: '128gb', price: 23000, color: 'blue'},
    {name: 'Asus', camera: 16, storage: '16gb', price: 10000, color: 'black'},
    {name: 'iphone', camera: 12, storage: '256gb', price: 87000, color: 'silver'},
    {name: 'xiaomi', camera: 32, storage: '64gb', price: 24000, color: 'black'},
    {name: 'oppo', camera: 50, storage: '64gb', price: 20000, color: 'purple'},
    {name: 'Nokia', camera: 10, storage: '32gb', price: 34000, color: 'white'},
    {name: 'HTC', camera: 70, storage: '64gb', price: 40000, color: 'maroon'},
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.Price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);