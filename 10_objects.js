//object constructor create a singleton object
const tinderuser=new Object();  
console.log(tinderuser);//return an empty object
tinderuser.id="avinash"
tinderuser.name="varanasi";
console.log(tinderuser);

//create a nested object
const my={
    name:"avinash",
    fullname:{
          username:{
            shortname:"abhishek",
            location:"ghazipur",

          }

    }
}
//accessing of nested object
console.log(my.fullname.username.shortname)

//merging two object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
//spread operator
const obj3={...obj1,...obj2};
console.log(obj3);