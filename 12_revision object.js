//create an object in two types

//object literals
const obj1={
    name:"avinash",
    location:"varanasi"
}
//accessing of object
console.log(obj1.location);
console.log(obj1);
console.log(obj1["location"]);
//change the value of key
obj1.name="abhishek";
console.log(obj1);

//define a symbol into an objects
//declaration of a symbol
const mysym=Symbol("key1");

const obj2={
    name2: "arpit",
    location:"bengaluru",
    mysym:"key1"
}

console.log(obj2);
console.log(typeof mysym);
console.log(typeof obj2);
console.log(typeof ("key1"))

