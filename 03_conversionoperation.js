let score="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=>33
// "33abc"=> NaN
// true => 1; false =>0

//conversion of 1 into boolean
let isLoggedIn=1
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);

// 1=>true; 0=>false
// ""=>false
// "hitesh" => true


let somenumbers=33

let stringNumber=string(somenumbers)
console.log(stringNumber)

// operations in javascript

let value=3;
let negvalue= -value;
console.log(negvalue);

let str1="avinash";
let str2="kumar";
let str3= str1+str2;
console.log(str3);

console.log("1"+2);//12
console.log(1+"2")//12
console.log("1"+2 +2)//122
console.log(1+2+"2")//32


console.log(+true) //op=> 1 
console.log(true)// op=> true
console.log(+"");//op =>false