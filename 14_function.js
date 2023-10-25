// pass infinite no of argument in Function parameter

function sum(...theargs){
    let total=0;
    for(const arg of theargs){
        total+=arg;
    }
    return total;
}
console.log(sum(1,2,4));
//expected o/p->6

function bundle(...num1){
    return num1
}
console.log(bundle(200,300,400));


function bundle1(val1,val2,...num1){
    return num1;
}
console.log(bundle1(200,300,400,500));
//return 400,500 in the array

//How to pass object in the function
const user={
    name:"Avinash",
    rollno:30
}
function handleobject(anyobject){
    console.log(`name is ${anyobject.name} and price is ${anyobject.rollno}`)

}
handleobject(user); 

//pass an array in a function

const myarray=[100,200,400];
function myvalue(getArray){
    return getArray[1];
}
console.log(myvalue([100,200,400]));