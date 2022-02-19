const numbers=[23,56,2,5,67,8,97,60,50,40]
const result=numbers.filter(product=>product>20);
const result1=numbers.filter(product=>product<20);
//console.log(result);
//console.log(result1);

const products=[
    {name:'phone',price:34,color:'green'},
    {name:'phone1',price:34,color:'green'},
    {name:'leptop',price:55,color:'green'},
    {name:'iphone',price:35,color:'blue'},
    {name:'lg tv',price:5,color:'red'},
]
const value=products.filter(product=>product.price>50);
const value1=products.filter(product=>product.color=='green');
console.log(value);
console.log(value1);