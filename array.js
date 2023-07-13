//array is object 
//javascript array are resizable and can contain a mix of different data types.
//javascript arrays are not associative arrays and so array element cannot be accessed using arbitrary strings as indexes.
//javascript array copy operations create shallow copies all standard built in copy operations with any js objects create shallow copies rather than deep copies.
const myarr=[1,2,4,5,6];
const myHeros=["shaktiman","naagraj"];
const myarr2=new array(1,2,3,4,5);
//how to value accessed in js
console.log(myarr[0]);

//array methods
//myarr.push(2);
//myarr.pop();



//myarr.unshift(0);//add element starting of the array
//myarr.shift()//remove element starting of the array 

//return a boolean types
console.log(myarr.includes(9));
console.log(myarr.indexOf(3));


//convert the array into string 
const newarr=myarr.join();
console.log(newarr);
console.log(myarr);

//slice and splice
console.log("a ",myarr);
//return a section of the array
const myn1=myarr.slice(1,3);

console.log(myn1);
console.log("b",myarr);

const myn2=myarr.splice(1,3);
//delte the element in the original array but in the slice not 
console.log("c",myarr);
console.log(myn2);









