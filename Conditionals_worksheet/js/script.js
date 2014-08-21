/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Worksheet
8-19-14
*/

//Hot Enough?
//Is it hot enough to go to the beach?
var temp = 80;

//if the temperature is less than 75..
if(temp < 75){
	//if its less than 75
	console.log("We will go to the beach!");
}else{
	//if it’s greater or equal to 75
	console.log("We will go to the movies.");
};

//Example
//Stuff your face

//does the competitor qualify for contest based on his weight
var competitorWeight = 255

//if the weight is equal or over 250
if (competitorWeight >= 250) {
	//if its over or equal 250
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	//it its less than 250
	console.log("The competitor needs to gain some weight!");
};

//------------------------------------------------------------------------------------------------------------//

//Group 1 - Expression with conditionals - Part 1
//Celsius to Fahrenheit

//If the user puts a “C” for the unit, convert the temperature to Celsius or vice versa.
var temp = 39; // degrees
var unit = "F"; // unit - to be converted to fahrenheit

// if the unit given is in Celsius
if (unit == "C") {

	C = (temp-32) * 5 / 9; //formula to convert to Celsius
	//it is in Celsius
	console.log("The temperature is " +C+ " degrees Celsius");

}else{ // if unit given is in Fahrenheit

	F = temp * 9 / 5 + 32; //formula to convert to Fahrenheit
	//it is in Fahrenheit
	console.log("The temperature is " +F+ " degrees Fahrenheit.");

};

//------------------------------------------------------------------------------------------------------------//

//Group 1 - Expression with conditionals - Part 2
//Last chance for gas

//determine if the user should stop now for gas or if he can make until the next gas station 200 miles away
var gasEfficiency = 30; // mpg - gas effiency of the car
var gasReading = 25; // % - gauge reading of the gas tank
var tankCapacity = 15 // gallons - car's gas tank capacity

var gasTank = tankCapacity*gasReading/100 //how many gallons are in the tank
var gasCapacity = gasTank*gasEfficiency //how many miles can it take

//if the gas in the tank can make to the next 200 miles
if (gasCapacity >= 200) {
	//it can make to the next 200 miles
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//it can not make to the next 200 miles
	console.log("You only have " +gasTank+ " gallons of gas in your tank, better get gas now while you can!")
};


//------------------------------------------------------------------------------------------------------------//

//Group 2 - Multiple Results - Part 1
//Grade Calculator

//Determine the appropriate letter grade for a number grade
var grade = 87; // % grade

if (grade >= 95) { // if grade is between 95 - 100
	console.log("You have a " +grade+ "%, which means you have earned an A+ in the class!");// print out result between 95 - 100
}else if (grade >= 90) { // if grade is between 90 - 95
	console.log("You have a " +grade+ "%, which means you have earned an A in the class!"); // print out result between 90 - 95
}else if (grade >= 85) { // if grade is between 85 - 89
	console.log("You have a " +grade+ "%, which means you have earned a B+ in the class!"); // print out result between 85 - 89
}else if (grade >= 80) { // if grade is between 80 - 84
	console.log("You have a " +grade+ "%, which means you have earned a B in the class!"); // print out result between 80 - 84
}else if (grade >= 76) { // if grade is between 76 - 79
	console.log("You have a " +grade+ "%, which means you have earned a C+ in the class!"); // print out result between 76 - 79
}else if (grade >= 73) { // if grade is between 73 - 75
	console.log("You have a " +grade+ "%, which means you have earned a C in the class!"); // print out result between 73 - 75
}else if (grade >= 70) { // if grade is between 70 - 72
	console.log("You have a " +grade+ "%, which means you have earned a D in the class!"); // print out result between 70 - 72
}else{ // if grade is lower than 70
	console.log("You have a " +grade+ "%, which means you have earned a F in the class!"); // print out result lower than 70
};


//------------------------------------------------------------------------------------------------------------//

//Group 2 - Multiple Results - Part 2
//Check Login

//To make sure the user has the correct username and password
var username = "Harry" //username entered by user
var password = "fsu2014" //password entered by user
var usernameCorrect = "Harry" // correct username
var passwordCorrect = "fsu2012" // correct password


if (username === usernameCorrect && password === passwordCorrect) {//if the username and password are corrects
	console.log("Welcome, " +usernameCorrect+ "!"); //username and password are correct
}else if (username !== usernameCorrect) {//if the username is not correct
	console.log("Username not found. Try again.");//username is not correct
}else{//if the password is not correct
	console.log("Password does not match our records.");//password is not correct
};


//------------------------------------------------------------------------------------------------------------//

//Group 3 - Multiple Conditions - Part 1
//Tire Pressure

//Determine if the tires of a given car are up to spec
var pressureTires = ["28", "28", "30", "31"];//pressure for each tire of the car 

//if the front tires have the same psi AND rear tires have the same psi
if (pressureTires[0] === pressureTires[1] /*front tires*/&& pressureTires[2] === pressureTires[3]/* rear tires*/) {
	console.log("The tires pass spec!"); //print out front tires have the same psi AND the rear tires have the same psi
}else{//if the front tires does not have the same psi OR/AND if rear tires does not have the same psi
	console.log("Get your tires checked out!");//print out front tires does not have the same psi AND/OR the rear tires does not have the same psi
};

//------------------------------------------------------------------------------------------------------------//

//Group 3 - Multiple Conditions - Part 2
//Movie Ticket Price

//Determine which of the two prices the customer is eligible for

var timeMovie = 18;//Time of the movie
var ageCustomer = 10;//age of the customer

var discountTicket = 7.00;//price of discounted ticket
var regularTicket = 12.00;//regular price ticket


if (15 <= timeMovie && timeMovie <= 17 || ageCustomer >= 55 || ageCustomer < 10) {//if customer goes between 3pm or 5pm
	console.log("The ticket price is $" +discountTicket+ ".");
}else{//if customer is not 55 and older or under 10 or/and does not go between 3pm and 5pm
	console.log("The ticket price is $" +regularTicket+ ".");
};

