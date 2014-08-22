/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Personal
8-21-14
*/

//Annual Balance


//Given
var yearMonths = 12;
var daysMonth = 30;


var name = prompt("Please type in your name")
console.log(name)
if (name === "") {
	name = prompt("Please enter your name!");
};

var rent = prompt("Do you pay rent?")
console.log(rent)
if (rent === "") {
	rent = prompt("Please enter yes or no!");
}else if (rent == "yes") {
	var rentBill = prompt("How much do you pay?")
	console.log("You pay $" +rentBill+ " on rent.")
};

var cellphone = prompt("Do you pay for your cellphone bill?")
console.log(cellphone)
if (cellphone === "") {
	cellphone = prompt("Please enter yes or no!");
}else if (cellphone == "yes") {
	var cellphoneBill = prompt("How much do you pay?")
	console.log("You pay $" +cellphoneBill+ " for your cellphone.")
};

var cable = prompt("Do you pay for your cable?")
console.log(cable)
if (cable === "") {
	cable = prompt("Please enter yes or no!");
}else if (cable === "yes") {
	var cableBill = prompt("How much do you pay?")
	console.log("You pay $" +cableBill+ " for you cable.")
};

var train = prompt("Do you pay for the monthly metro card?")
console.log(train)
if (train === "") {
	train = prompt("Please enter yes or no!");
}else if (train === "yes") {
	var trainBill = prompt("How much do you pay?")
	console.log("You pay $" +trainBill+ " for your monthly metro card.")
};

var monthlyBill = (rentBill + cellphoneBill + cableBill + trainBill)*yearMonths
console.log("You spend $" +monthlyBill+ " on your monthly bills every year.")

//weekly

var monthlyLaundry

var laundry = prompt("How much do you pay for your laundry?")
console.log(train)
if (train === "") {
	train = prompt("Please enter yes or no!");
}else if (train === "yes") {
	var trainBill = prompt("How much do you pay?")
	console.log("You pay $" +trainBill+ " for your monthly metro card.")
};









