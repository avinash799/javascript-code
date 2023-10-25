//array is "list-like objects" Array can store multiple value in the single variable 
//But in js array can store various data types values-string,numbers ,objects
//In js array can be resizable
const seq=[1,2,4,"tree","floor"];

console.log(seq);
//creating an array
const shopping=["bread","milk","cheese"];
//accessing the array using indexes
console.log(shopping[0]);
console.log(shopping);
//finding the length of the array
console.log(shopping.length)

//Array Methods
shopping.push("ghee"); //add element in the last

console.log(shopping);
shopping.pop(); //remove the last element in the array
console.log(shopping);

shopping.unshift(2); //add element in the  beginning of the array
console.log(shopping);
shopping.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(shopping);
console.log(shopping.includes(9));//return the true or false
console.log(shopping.indexOf("milk")); //return the  1 or -1


//slice , splice
console.log("A",shopping);
const myn1=shopping.slice(1,3);

console.log(myn1);

console.log(shopping);

console.log("b",shopping);
const myn2=shopping.splice(0,2);
console.log(myn2);
console.log(shopping);
const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("avinash"))
//return false
//convert into array
console.log(Array.from("avinash"));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



//const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
