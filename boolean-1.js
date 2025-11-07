// check whether a student is enrolle din class or not
// demo on boolean data type

const prompt = require('prompt-sync')();

//create three variables. two variable will be assigned th e first name of the two students, the third variable will accept the fisrsr=t name from user
let fname1= "Rowan";
let fname2= "Nicholas";
// declare and assign value false to the variable status
let status= false;
console.log(typeof(Status));

if (fname1==="Rowan"){
status=true;
}

else if (fname2=== "Nicholas"){
    status=false;
}

else{
    console.log("Student doesn't exist ");
}



let fname = prompt("Enter Students First Name: ")
if(fname === fname1)
{
    console.log(fname + " is enrolled in the class")
}

else if ( fname===fname2)
{
    console.log(fnanme + " dropped the class")
}
else{
    console.log("student doesnt exist")
}