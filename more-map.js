const friends=['hello', 'I am utpal','chondra','sarker'];
const friendLength=friends.map(friends=>friends.length);
console.log(friendLength);

const products=[
    {name:'phone',price:34,color:'green'},
    {name:'leptop',price:55,color:'green'},
    {name:'iphone',price:35,color:'green'},
    {name:'lg tv',price:5,color:'green'},
]
const result=products.map(product=>product.price)
const result1=products.map(product=>product.name)
products.map(product=>console.log(product))
console.log(result);
console.log(result1);