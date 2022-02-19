const numbers=[4,6,8,10];
const output2=[];

//const dubletIt=number=>number*2;

// for(const number of numbers){
//     var result=dubletIt(number);
//     output2.push(result)
// }
//console.log(outPut2);

const output=numbers.map(number=>number*2);
console.log(output);

const squere=numbers.map(number=> number*number)
console.log(squere);