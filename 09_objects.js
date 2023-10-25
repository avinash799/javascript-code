//decalaration of object in two 
//1->object constructor//singelton
//Object.create()

//2->object literals

//defined a symbol
const mysym=Symbol("key1");


//add symbol element in the object

const jsuser={
    name:"Avinash",
    [mysym]:"mykey1",
   // value same but not treated as symbol mysym : "mykey",
    age:20,
    "full name":"avinash",
    location:"Ghazipur"
}
//accessing object element
console.log(jsuser.name);
console.log(jsuser["user"])
console.log(jsuser["full name"]);
console.log(typeof mysym);

//change the value of location
jsuser.location="varanasi"
console.log(jsuser)
//after object.freeze use does not change the value of key
Object.freeze(jsuser);

jsuser.greetingTwo=function(){
    console.log(`hello js user ,${this.name}`);
    
}
console.log(typeof mysym);