/*
Harrison Aguiar
WPF 1408 Section 01
Functions Personal
8-21-14
*/

//Annual spending

//Determine how much user spend in a year with monthly bills

//Given
var yearMonths = 12;//number of months in a year
var answerNo = 0;//value given for every "no" as answer

var name = prompt("Please type in your name")//ask user's name
console.log(name)// print out result
if (name === "") {//validation
	name = prompt("Please enter your name!");
};

var rent = prompt("Do you pay rent?")//ask user if pays for rent
console.log(rent)// print out result
if (rent === "") {//validation
	rent = prompt("Please enter yes or no!");
}else if (rent === "yes") {//if answer is yes
	var rentBill = prompt("How much do you pay?")//ask user how much pays for rent every month
	console.log("You pay $" +rentBill+ " on rent.")// print out result
}else if (rent === "no") {//if answer is no
	var rentBill = answerNo;
	console.log("You pay $" +rentBill+ " for your cellphone.")// print out result
};

var cellphone = prompt("Do you pay for your cellphone bill?")//ask user if pays for cellphone
console.log(cellphone)// print out result
if (cellphone === "") {//validation
	cellphone = prompt("Please enter yes or no!");
}else if (cellphone === "yes") {//if answer is yes
	var cellphoneBill = prompt("How much do you pay?")//ask user how much pays for cellphone bill every month
	console.log("You pay $" +cellphoneBill+ " for your cellphone.")// print out result
}else if (cellphone === "no") {//if answer is no
	var cellphoneBill = answerNo;
	console.log("You pay $" +cellphoneBill+ " for your cellphone.")// print out result
};

var cable = prompt("Do you pay for your cable?")//ask user if pays for cable
console.log(cable)// print out result
if (cable === "") {//validation
	cable = prompt("Please enter yes or no!");
}else if (cable === "yes") {//if answer is yes
	var cableBill = prompt("How much do you pay?")//ask user how much pays for cable every month
	console.log("You pay $" +cableBill+ " for your cable.")// print out result
}else if (cable === "no") {//if answer is no
	var cableBill = answerNo;
	console.log("You pay $" +cableBill+ " for your cable.")// print out result
};

var train = prompt("Do you pay for the monthly metro card?")//ask user if pays for metro card every month
console.log(train)// print out result
if (train === "") {//validation
	train = prompt("Please enter yes or no!");
}else if (train === "yes") {//if answer is yes
	var trainBill = prompt("How much do you pay?")//ask user how much pays for metro card every month
	console.log("You pay $" +trainBill+ " for your monthly metro card.")// print out result
}else if (train === "no") {//if answer is no
	var trainBill = answerNo;
	console.log("You pay $" +trainBill+ " for your monthly metro card.")// print out result
};

var monthlyBill = (Number(rentBill) + Number(cellphoneBill) + Number(cableBill) + Number(trainBill)) * yearMonths//calculation for the annual spending on bills
console.log("You spend $" +monthlyBill+ " on your monthly bills for the year.")// print out result
alert("You spend $" +monthlyBill+ " on your monthly bills for the year.")// alert user the result
