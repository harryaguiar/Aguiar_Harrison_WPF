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

//Group 1 - Expression with conditionals
//Celsius to Fahrenheit

//If the user puts a “C” for the unit, convert the temperature to Celsius or vice versa.
var temp = 39; // in fahrenheit
var unit = "F"; // to be converted to fahrenheit

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

//Last chance for gas

//determine if the user should stop now for gas or if he can make until the next gas station 200 miles away
var gasEfficiency = 30; // mpg
var gasReading = 25; // %
var tankCapacity = 15 // gallons

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

//Group 2 - Multiple Results
//Celsius to Fahrenheit


//Group 3 - Multiple Conditions
//Celsius to Fahrenheit



/*


if (courtesyVal >= 4 || overallVal >= 4) {
    courtesyVal = "A";
    overallVal = "A";
} 
else if (courtesyVal >= 3 || overallVal >= 3) {
    courtesyVal = "B";
    overallVal = "B";
} 
else if (courtesyVal >= 2 || overallVal >= 2) {
    courtesyVal = "C";
    overallVal = "C";
} 
else if (courtesyVal >= 1 || overallVal >= 1) {
    courtesyVal = "D"; 
    overallVal = "D";
} 
else {
    courtesyVal = "F"; 
    overallVal = "F";
}

*/