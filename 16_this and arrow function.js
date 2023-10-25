 const user={
    username:"avinash" ,
    price:999,
    welcomeMessages(){
      console.log(`${this.username},welcome to website`);
    }
    
 }
 user.welcomeMessages()
 user.username="sam";
 user.welcomeMessages();

 //In normal function this keyword return the predefined function in the javascript
 const chai1=function(){
   let username="avinash"
   let address="policeline"
   console.log(this.username);
   console.log(username+this.address);

 }
 //username.this("varanasi");
 chai1();
 chai1();
 //arrow function
 const chai=()=>{
   let username="Avinash"
   console.log(this.username);

   //in the arrow function this keyword return the empty object

   console.log(this);

 }
 //username.this("varanaisi")

 chai();

 //arrow function
 const addTwo=(num1,num2)=>{
   return num1+num2
 }
 console.log(addTwo(3,4));