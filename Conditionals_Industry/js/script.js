/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Industry
8-21-14
*/

//Determine if user is older enough to take driving classes, how will cost and how many weeks will take

var classCost = 23.99;//cost for each class
var classWeek = 4;//number of classes per week

var name = prompt("Please type in your name"); //ask user name
if (name === "") {//validation
	name = prompt("Please enter your name!");
};

var age = prompt("How old are you?");// ask user age
if (age === "") {//validation
	age = prompt("Please enter your age!");
};

licensable = (age < 16) ? "Too young":"Old enough"//if user is old enough to take driving classes
console.log(licensable)//print out result


var license = prompt("Do you have a driver's license?");// ask user if he has driver's license

if (license === "") {//validation
	license = prompt("Please enter yes or no!");
}

if (license === "no" && age > 16) {//if user doesn't have license and is over 16 
	licenseProspect = prompt("Are you interested in taking driving classes?");// ask user if he is interested in taking driving classes
};

if (licenseProspect === "") {//validation
	licenseProspect = prompt("Please enter yes or no!");
}else if (licenseProspect === "yes") {//if user is interested on taking
	classesNumber = prompt("How many classes are you willing to take?"); //if so, ask user how many classes he would take
};

var totalPrice = Number(classesNumber) * classCost //calculate cost for all classes
console.log("The total for " +classesNumber+ " classes is $" +totalPrice) //print out result
alert("The total for " +classesNumber+ " classes is $" +totalPrice) //alert result to user

var totalWeeks = Number(classesNumber) / classWeek //calculate how many weeks will take all classes
console.log("You will need " +totalWeeks+ " weeks to complete all " +classesNumber+ " classes.") // print out result
alert("You will need " +totalWeeks+ " weeks to complete all " +classesNumber+ " classes.") // alert result to user 

