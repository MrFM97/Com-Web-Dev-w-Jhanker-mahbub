const user = { id: 1, name: 'Gorib amir', job: 'actor' };
// JavaScript Object Notation ( JSON)
const stringified = JSON.stringify(user);
/* console.log(user); 
console.log(stringified); */

/* 
{ id: 1, name: 'Gorib amir', job: 'actor' } ==>> JS
{"id":1,"name":"Gorib amir","job":"actor"} ==>> JSON */

const shop = {
    owner: 'Alia',
    address: {
        street: 'Rangpur',
        city: 'ranbeer',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON); //won't make string thats stringify does
console.log(shopObj);