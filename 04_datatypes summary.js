//#  Primitive //call by value
// 7 types : string ,Number, boolean, Null ,undefined ,symbol, BigInt

const score=100
const scorevalue=100.3
const isloggedIn=false
const outsidetemp=null
let userEmail=undefined;
const id=Symbol('123')
const anotherid=Symbol('123')


// Symbol data types
const id1=Symbol('123')
const anotherid2=Symbol('123')
console.log(id1===anotherid2)

//Non-primitive or reference type: call by refernce 
//Array , objects, Functions

const heroes=["shaktiman","naagraj","doga"];

//objects
let myobj={
    name:"hitesh",
    age:22,
}

//Function

 const myfunc =function(){
         console.log("hello world");
}
myfunc();