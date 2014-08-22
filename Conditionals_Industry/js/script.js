/*
Harrison Aguiar
WPF 1408 Section 01
Conditionals Industry
8-21-14
*/

//Quotation for a web design work

var name = prompt("Please type in your name")
if (name === "") {
	name = prompt("Please enter your name!");
}


var age = prompt("How old are you?");
if (age === "") {
	age = prompt("Please enter your age!");
}

var license = prompt("Do you have a driver's license?")

if (license === "") {
	license = prompt("Please enter yes or no!");
}else if (license === "no") {
licensable = (age < 18) ? "Too young":"Old enough";
console.log(licensable);
}