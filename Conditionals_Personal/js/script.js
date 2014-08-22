/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Personal
8-21-14
*/

//Annual spending

//Determine how much user spend in a year with monthly bills

//Given
var yearMonths = 12;//number of months in a year
var answerNo = 0;//value given for every "no" as answer


var name = prompt("Please type in your name")
console.log(name)
if (name === "") {
	name = prompt("Please enter your name!");
};

var rent = prompt("Do you pay rent?")
console.log(rent)
if (rent === "") {
	rent = prompt("Please enter yes or no!");
}else if (rent === "yes") {
	var rentBill = prompt("How much do you pay?")
	console.log("You pay $" +rentBill+ " on rent.")
}else if (rent === "no") {
	var rentBill = answerNo;
	console.log("You pay $" +rentBill+ " for your cellphone.")
};

var cellphone = prompt("Do you pay for your cellphone bill?")
console.log(cellphone)
if (cellphone === "") {
	cellphone = prompt("Please enter yes or no!");
}else if (cellphone === "yes") {
	var cellphoneBill = prompt("How much do you pay?")
	console.log("You pay $" +cellphoneBill+ " for your cellphone.")
}else if (cellphone === "no") {
	var cellphoneBill = answerNo;
	console.log("You pay $" +cellphoneBill+ " for your cellphone.")
};;

var cable = prompt("Do you pay for your cable?")
console.log(cable)
if (cable === "") {
	cable = prompt("Please enter yes or no!");
}else if (cable === "yes") {
	var cableBill = prompt("How much do you pay?")
	console.log("You pay $" +cableBill+ " for your cable.")
}else if (cable === "no") {
	var cableBill = answerNo;
	console.log("You pay $" +cableBill+ " for your cable.")
};

var train = prompt("Do you pay for the monthly metro card?")
console.log(train)
if (train === "") {
	train = prompt("Please enter yes or no!");
}else if (train === "yes") {
	var trainBill = prompt("How much do you pay?")
	console.log("You pay $" +trainBill+ " for your monthly metro card.")
}else if (train === "no") {
	var trainBill = answerNo;
	console.log("You pay $" +trainBill+ " for your monthly metro card.")
};

var monthlyBill = (Number(rentBill) + Number(cellphoneBill) + Number(cableBill) + Number(trainBill)) * yearMonths
console.log("You spend $" +monthlyBill+ " on your monthly bills for the year.")










