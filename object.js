//introduction of object

 //object store key value pair

 //object declaration 1->litereal  2->constructor->singleton
//Object.create

 //decalaration of object literals

 const mysum=Symbol("key1");
 //create a object

 const obj1={
    name:"avinash",
    0:"abhishek",
    age:18,
    location:"ghazipur",
 [mysum]:"mykey1",
    "fullname":"avinassh kumar rua"
 }

 //accces of the object
 console.log(obj1.name)
 console.log(obj1location)

 //acces of the object
 console.log(obj1["location"]);

 console.log(obj1["full name"]);
 //data types return string
console.log(obj1.mysum);

console.log(obj1[mysum]);


//change the value in the object
obj1.name="avinash kumar rr rai";
obj1.freeze(obj1);
