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
}


var age = prompt("How old are you?");// ask user age
if (age === "") {//validation
	age = prompt("Please enter your age!");
}

licensable = (age < 16) ? "Too young":"Old enough";// print out result if user is old enough to take driving classes
console.log(licensable)


var license = prompt("Do you have a driver's license?")

if (license === "") {//validation
	license = prompt("Please enter yes or no!");
}

if (license === "no" && age > 16) {//if user doesn't have license and is over 16 
	licenseProspect = prompt("Are you interested in taking driving classes?")
}

if (licenseProspect === "") {//validation
	licenseProspect = prompt("Please enter yes or no!");
}else if (licenseProspect === "yes") {//if user is interested on taking 
	classesNumber = prompt("How many classes are you willing to take?")
};

var totalPrice = Number(classesNumber) + classCost
console.log("The total for " +classesNumber+ " classes is $" +totalPrice)
alert("The total for " +classesNumber+ " classes is $" +totalPrice)

var totalWeeks = Number(classesNumber) / classWeek
console.log("You will need " +totalWeeks+ " weeks to complete all " +classesNumber+ " classes.")
alert("You will need " +totalWeeks+ " weeks to complete all " +classesNumber+ " classes.")


