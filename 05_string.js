const name="hitesh"
const repocount=50;
console.log(name+repocount+"value ")
console.log(`Hello my name is ${name}and my repo count is ${repocount}`);

//using normal
console.log("string text line 1\n"+"string text line2");
//op-> string text line 1
//string text line2

//using backtick
console.log(`string text line1 
string text line2`);

//string declaration
const gameName= new String('avinash')
console.log(typeof (gameName));

//console.log(typeof name);
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring=gameName.substring(0,4)
console.log(newstring);
const anotherString =gameName.slice(-8,4)
console.log(anotherString)
const newStringOne=" hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim())
//trim -> remove whitespaces

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));


//string interpolatioan
const a =5;
const b=10;
console.log("fifteen is "+(a+b)+"and\nnot"+ (2 * a + b) + ".");

//o-p-> "fifteen is 15 and 
//not 20."
//but in string interpolation
console.log(`fifteen is ${a+b} and 
not ${2*a+b}`);
//print same output