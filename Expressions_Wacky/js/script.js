/*
Harrison Aguiar
WPF 1408 Section 01
Expression Wacky
8-14-14
*/

/*
Wacky: This third calculator should be something off the wall. Impress us with your creativity and originality.
*/

//Welcome alert
alert("Hello! Let's find how old would you be at your Graduation. Click 'Ok' to start!")

//Quotes to encourage user to complete the questions
var quote= new Array(5) 
quote[0]="Keep in mind..."; 
quote[1]="You will have enough time to succeed in life!"; 
quote[2]="No matter how old you will be..."; 
quote[3]="Just of being in college you are alredy a success!"; 
var x=0; 
for (x=0; x<3; x++) 
{ 
alert(quote[x]); 
} 

// Ask the user their name
//Create a variable to catch their answer
var name = prompt("Please type in your name:");
console.log(name); //Console.log out the response

//Find out how many credits still need to be taken
//Create a variable to catch their answer
var creditsTaken = prompt("How many credits have taken already?"); //credits already taken variable
console.log(creditsTaken); //Console.log out the response

//Create a variable to catch their answer
var creditsNeeded = prompt("How many credits do you need to furfill your requirements?"); //credits needed to graduate variable
console.log(creditsNeeded); //Console.log out the response

var creditsLeft = Number(creditsNeeded) - Number(creditsTaken); //credits left to be taken variable
//the result
console.log(name+ ", you still have " +creditsLeft+ " to take."); //Console.log out the response
alert(name+ ", you still have " +creditsLeft+ " to take.");//alert user the result


//Ask the user what year started college
//Create a variable to catch their answer
var timeIn = prompt("Hi " +name+ "! What year did you start at college?");//variable to find out when user entered college

//Console.log out the response
console.log(timeIn);


//Ask the user what year they expect to graduate
//Create a variable to catch their answer
var timeOut = prompt("In what year is your expected Graduation year?");//variable to find out year of graduation

//Console.log out the response
console.log(timeOut);
//Current Year and subtract the year ther were born

//Create a variable for the current year
var currentYear = 2014;

var yearsLeft = Number(timeOut) - Number(currentYear);//variable to find out how many years left in college

//Create a variable to catch their answer
var yearBorn = prompt("In what year did you born?"); //find out what year they born



var currentAge = Number(currentYear) - Number(yearBorn);//variable to find out user current age
console.log(currentAge); //Console.log out the response


var graduationAge = Number(yearsLeft) + Number(currentAge);//variable to find out how old user will be at graduation
console.log(graduationAge); //Console.log out the response

//the result
console.log(name+ ", you are " +currentAge+ " years old. You will be " + graduationAge + " years old at your Graduation."); //Console.log out the response
alert(name+ ", you are " +currentAge+ " years old. You will be " + graduationAge + " years old at your Graduation.");//alert user the result