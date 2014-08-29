/*
Harrison Aguiar
WPF 1408 Section 01
Functions Industry
8-27-14
*/

(function() {
    alert("Welcome to What's Up Studio evaluation form");
}());

var name = prompt("Please type in your name.")

while(name===""){
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);

/*-------------------------------------------------------*/


var question1 = prompt(name+ ", do you have a website for your business?")

while(question1 != "" && question1 != "no" && question1 != "No" && question1 != "yes" && question1 != "Yes"){
	question1=prompt("Don't leave this blank, it's required!\nPlease type in your Yes or No!")
}

console.log(question1);


/*-------------------------------------------------------*/

if (question1 === "no" || question1 === "No") {
	question2 = prompt("Do you want to have one?")
}else if (question1 === "yes" || question1 === "Yes") {
	var question3 = prompt("Is updating your site an option?")
};
console.log(question3)

if (question2 === "yes" || question1 === "Yes") {
	var question4 = prompt("How many pages are looking to have in your site?")
};

console.log(question4)

if (question3 === "yes" || question1 === "Yes") {
	var question5 = prompt("How many pages are looking to update in your site?")
};

console.log(question5)

/*-------------------------------------------------------*/
var planChosen = prompt("We offer Gold plan, Silver plan and Bronze plan.\nGold = $150.00\nSilver = $100.00\nBronze = $75.00\nHow much are you willing to pay? ")

var appBuild = prompt("For an extra of $25.00, you can also have your own mobile app\nAre you considering on having your own mobile app for your business?")

if (appBuild === "yes" || appBuild === "Yes") {
	var appCost = 25;
};

var totalPay = calcCost(planChosen, appCost)

function calcCost(p, a){
	var cost = Number(p) + Number(a);
	return cost;
}
console.log("You will pay only $" +totalPay+ " for your website")


