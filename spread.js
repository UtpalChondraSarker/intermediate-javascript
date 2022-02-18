const numbers=[12,10,13,34,34,56];
//console.log(numbers);
//console.log(...numbers);

const num=(13,45,70);
const max=Math.max(num);
//console.log(max);
const result=Math.max(...numbers);
//console.log(result);
const number2=[...numbers,88];
numbers.push(100);
console.log(numbers);
console.log(number2);