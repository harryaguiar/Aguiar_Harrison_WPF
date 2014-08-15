/*
Harrison Aguiar
WPF 1408 Section 01
Expression Industry
8-14-14
*/

/*
Industry-specific: This second set should be something related to either your current job or the web design and development industry.
A good example of this would be something that calculates how many pixels square an image resolution is based on image dpi, width and height.
*/



/*example*/
alert("Hello! Let's find out how much money you made today. Click 'Ok' to start!")

//Create a js file that will tell us how old we are

// Ask the user their name
var name = prompt("Please type in your name:");

//Say hello to the user and let them know what we are doing
//ALERT the user


//Ask the user what year ther were born in
//Create a variable to catch their answer

var timeIn = prompt("Hi " +name+ "! What time did you get in?");

//Console.log out the response
console.log(timeIn);


//Ask the user what year ther were born in
//Create a variable to catch their answer

var timeOut = prompt("What time are you getting out?");

//Console.log out the response
console.log(timeOut);
//Current Year and subtract the year ther were born

//Create a variable for the current year

var dayTime = 12;

//Calculate the age
var totalTime = (12-timeIn) + (12-timeOut);

//Alert user with their age
alert(name+ " you worked " +totalTime+ " hours today.");

//Let's make this more complex
//How old will the user be in the future...

alert("Now, let's find out how much you made today. Click 'Ok' to continue!")

//Ask the user, how many years in the future they would like to know
var deliveries = prompt("How many deliveries did you make today?");
console.log(deliveries);

var deliveryPay = 2.15;

var deliveryTotal = deliveries * 2.15;

//Make the result look pretty :)
console.log("You made " +deliveries+ " deliveries today and made $" + deliveryTotal +" in " +totalTime+ " hours working.");
alert("You made " +deliveries+ " today and made $" + deliveryTotal +" in " +totalTime+ " hours working.");

var milesDriven = prompt("How many miles did you drive today?");
console.log(milesDriven);


var milesPay = 1.07;

var milesTotal = milesDriven * 1.07;


//Make the result look pretty :)
console.log("You drove " +milesDriven+ " miles today and made $" + milesTotal +" in " +totalTime+ " hours working.");
alert("You made " +deliveries+ " today and made $" + deliveryTotal +" in " +totalTime+ " hours working.");

var totalPay = milesTotal + deliveryTotal;

console.log("Thank you for your work " +name+ ". You made $" +totalPay+ " today. Enjoy the rest of your day! See you tomorrow! :)");
alert("Thank you for your work " +name+ ". You made $" +totalPay+ " today. Enjoy the rest of your day! See you tomorrow! :)");


//Problem Name
//Calculate 
//var

//print out the output for 
//console.log()