//call by value and call by reference

var x=12;
var y=x;
y=15;
console.log(x);

// call by reference
let obj1={
    name:"avinash",
    age:22,
}

let obj2=obj1;
obj2={
     name:"abhishek",
     age:40,
}
console.log(obj1);
console.log(obj2)