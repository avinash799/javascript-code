//this keyword defines the current context 
const user={
    username:"avinahs",
    price:999,
    //defined the method
    welcomeMessage: function(){
        console.log(`${this.username},welcome to websites`)
        console.log(this);  //return the current value
    }

}
user.welcomeMessage();
//change the username
user.username="sam";
user.welcomeMessage();

//console.log(this)//return the empty object in the node environment
//in the browser console.log(this)return the window globals object

function chai(){
    let current="avinash"
    console.log(this);//return the  predefined function
    console.log(this.username)//in regular function this is not properly gives the current value
}
chai();

let result=() => {
    console.log(this); //return the empty object

}
result();

//implicit binding
const person={
    name:"ram",
    age:22,
    greet:function(){
        return `Hello ${this.name},you are $ {this.age}`;
    }
}
console.log(person.greet);
//op->Hello ram you are 22 years old
//Here this keyword is referring to the person object so it can access name and age values.

//arrow binding function
//in arrow function it can not access name using this keyword
let cow=()=>{
    let name="vikajs";
    console.log(this.name);
}
cow();

//IN the default binding
 //this keyword refers the global objects
 const age=22;
 function verifyage(){
    return this.age;
 }
 console.log(verifyage());





 function greet(){
    name="avinash";
    age=20;
    return 
 }