var add=(num1,num2)=>num1+num2;
const sum=add(10,10);
console.log(sum);

let multify=(num1,num2,num3)=>num1*num2*num3;
const value=multify(3,5,2);
console.log(value);

const fiveTimes=(num)=>num*5;
const outPut=fiveTimes(17);
console.log(outPut);

const getName=()=>'bangladesh is small country';
const name=getName();
console.log(name);

const doMath=(x,y)=>{
    const sum=x+y;
    const substrction=sum-y;
    const multi=substrction+y;
    const reslut1=multi*5;
    return reslut1;
}
const total=doMath(12,5);
console.log(total);

