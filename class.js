class support {
    name;
    designation='support web dev';
    address='BD'
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,'sart a support session');
    }
}
const ammir=new support('ammir khan','Dubai');
const salman=new support('soleman khan','india');
ammir.startSession()
// console.log(salman);
// console.log(ammir);