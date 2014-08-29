/*
Harrison Aguiar
WPF 1408 Section 01
Functions Industry
8-27-14
*/


//Quotation for a new prospect customer


(function() {//function to welcome user
    alert("Welcome to What's Up Studio evaluation form");
}());

var name = prompt("Please type in your name.")//ask user name

while(name===""){//validation
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);//print out result

/*-------------------------------------------------------*/


var question1 = prompt(name+ ", do you have a website for your business?")//ask user if his business has a website

while(question1 != "" && question1 != "no" && question1 != "No" && question1 != "yes" && question1 != "Yes"){//validation
	question1=prompt("Don't leave this blank, it's required!\nPlease type in your Yes or No!")
}

console.log(question1);//print out result


/*-------------------------------------------------------*/

if (question1 === "no" || question1 === "No") {//if not
	question2 = prompt("Do you want to have one?")//ask user if he wants one
}else if (question1 === "yes" || question1 === "Yes") {//if so
	var question3 = prompt("Is updating your site an option?")//ask user if updating is an option
};
console.log(question3)//print out result

if (question2 === "yes" || question1 === "Yes") {//if so
	var question4 = prompt("How many pages are looking to have in your site?")//ask user how many pages is he looking to have on his site
};

console.log(question4+ " pages.")//print out result

if (question3 === "yes" || question1 === "Yes") {//if so
	var question5 = prompt("How many pages are looking to update in your site?")//ask user how many pages is he looking to update
};

console.log(question5+ " pages.")//print out result

/*-------------------------------------------------------*/
var planChosen = prompt("We offer Gold plan, Silver plan and Bronze plan.\nGold = $150.00\nSilver = $100.00\nBronze = $75.00\nHow much are you willing to pay? ")//ask user how much he is willing to pay

var appBuild = prompt("For an extra of $25.00, you can also have your own mobile app\nAre you considering on having your own mobile app for your business?")//ask user if he is interested in mobile app

if (appBuild === "yes" || appBuild === "Yes") {// if so, the cost will be an extra of $25.00
	var appCost = 25;
};

var totalPay = calcCost(planChosen, appCost)//variable to calculate the total pay for the service

function calcCost(p, a){//defining
	var cost = Number(p) + Number(a);//function calculation
	return cost;//function spitting the info out
}
console.log("You will pay only $" +totalPay+ " for your website")//print out result


