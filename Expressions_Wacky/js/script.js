/*
Harrison Aguiar
WPF 1408 Section 01
Expression Wacky
8-14-14
*/

/*
Wacky: This third calculator should be something off the wall. Impress us with your creativity and originality.
*/

/*example*/
alert("Hello! Let's find how old would you be at your Graduation. Click 'Ok' to start!")

//Create a js file that will tell us how old you will be at your graduation

// Ask the user their name
var name = prompt("Please type in your name:");
console.log(name);

var creditsTaken = prompt("How many credits have taken already?"); //credits already taken

var creditsNeeded = prompt("How many credits do you need to furfill your requirements?"); //credits needed to graduate

var creditsLeft = (creditsNeeded - creditsLeft); //credits needed to take

console.log(name+ ", you still have " +creditsLeft+ " to take.");
alert(name+ ", you still have " +creditsLeft+ " to take.");


//Ask the user what year started college
//Create a variable to catch their answer

var timeIn = prompt("Hi " +name+ "! What year did you start at college?");

//Console.log out the response
console.log(timeIn);


//Ask the user what year they expect to graduate
//Create a variable to catch their answer

var timeOut = prompt("In what year is your expected Graduation date?");

//Console.log out the response
console.log(timeOut);
//Current Year and subtract the year ther were born

//Create a variable for the current year

var yearBorn = prompt("In what year did you born?"); //find out what year they born

var currentYear = 2014

var currentAge = parseInt(currentYear - yearBorn);

var graduationAge = parseInt(timeOut - currentAge);

//the result
console.log(name+ ", you are " +currentAge+ " years old. You will be " +graduationAge+ "years old at your Graduation.");
alert(name+ ", you are " +currentAge+ " years old. You will be " +graduationAge+ "years old at your Graduation.");


