/*
Harrison Aguiar
WPF 1408 Section 01
Expression Personal
8-19-14
*/


//Intro videos
/*
if (condition) {
	actions
};

sunny=true
if (sunny) {
	goToTheBeach();
}else{
	goToTheMovies();
}

temp = 80
if (temp>70) {
	goToTheBeach();
}

if (temp ==75) {
	goToTheBeach();
}


if (sunny) {
	goToTheBeach();
	if (warmWater) {
		wearNewSuit();
	}
}else{
	goToTheMovies();
}

*/

//Conditional Logic
/*
var oldEnough = false;

//if the child is old enough, print to the console "you can ride!"
if (oldEnough) {
	//code performed if condition is true
	console.log("You can ride the coaster!");
};
console.log("What comes after");
*/



//Conditional Logic - Relational Expressions
/*
var kidHeight = 50;
var minHeight = 48;

//if the kid is over 48 inches in height
if (kidHeight > minHeight) {
	//code performed if condition is true
	console.log("You can ride the coaster!");
};
*/


//Conditional Logic - With an Expression
/*
var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the kid is over 48 inches in height
if (kidHeight + sneakerLift > minHeight) {
	//code performed if condition is true
	console.log("You can ride the coaster!");
};
*/



//Conditional Logic - If and Else
/*
var kidHeight = 48;
var minHeight = 48;

//if the kid is over 48 inches in height
if (kidHeight > minHeight) {
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else{
	//code performed if condition is false
	console.log("Sorry kid, you've got some growing to do first!");
};
*/



//Conditional Logic - Else if
/*
var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the kid is over 48 inches in height
if (kidHeight > minHeight) {
	//you can ride!
	console.log("You can ride the coaster!");
}else if (kidHeight > wParentHeight) {
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!");
};
*/



//Conditional Logic - Logical Operators && = AND
/*
var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less of our budget AND if our paycheck is over 300
if (iPhonePrice < budget && paycheck > 300) {
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
};
*/


//Conditional Logic - Logical Operators || = Or
/*
var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less of our budget AND if our paycheck is over 300
if (iPhonePrice < budget || wonLottery) {
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
};
*/


//Conditional Logic - Ternary Operators Part 1
/*
var age = 11;
var book;


//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
if (age < 10) {
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine"
};
console.log(book);
*/

//Conditional Logic - Ternary Operators Part 2

var age = 11
var book;
//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);




























