//declare a variable
//create a object

let myDate= new Date()
console.log(myDate.toString()); //print exact date and time(indian standard time)
console.log(myDate.toDateString()); //print only date

//print date -data type
console.log(typeof myDate);

//define a specific date
let mycurrentdate=new Date(2023,9,28)


console.log(mycurrentdate);

//declare date in the form of year-dd--mm
let mycurrentdate1=new Date("2023-01-14")//print 1/14/2023 january
console.log(mycurrentdate.toString());

//Timestamp
let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(mycurrentdate1.getTime());
console.log(Math.floor(Date.now()/1000));

//find a specific day and month 
let newdate=new Date()
console.log(newDate.getTime());
console.log(newdate.getMonth());
//customization

newdate.toLocaleString('default',{
    weekday:"long"
    timezone:''
})