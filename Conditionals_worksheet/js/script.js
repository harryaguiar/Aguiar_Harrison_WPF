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


var temp = 32; //in celsius
var unit = "C";

if (unit == "C") {
	console.log("The temperature is " +temp+ " degrees Celsius");
}else{
	console.log("The temperature is " +temp+ " X degrees Fahrenheit.");
};






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