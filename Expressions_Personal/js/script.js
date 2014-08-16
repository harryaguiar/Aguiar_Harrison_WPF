/*
Harrison Aguiar
WPF 1408 Section 01
Expression Personal
8-14-14
*/

/*
Personal: The first set should be something personal to you. Some examples
Code that calculates how many diapers you will need over the course of a year.
How much paint you would need for a room in your home.
*/


var daysOfWeek = 7;

/*example*/
alert("Hi! Let's find out how much money you spent on food for the past week! \n Click 'Ok' to start!")


//Create a js file that will tell us how old we are

// Ask the user their name
//Create a variable to catch their answer
var name = prompt("Please type in your name:");
console.log(name);

//Say hello to the user and let them know what we are doing
//ALERT the user


//Ask the user what year ther were born in
//Create a variable to catch their answer
var breakfastHome = prompt("Hi " +name+ "! How many days did you have breakfast at home?");

//Console.log out the response
console.log(breakfastHome);


//Ask the user what year ther were born in
//Create a variable to catch their answer
var breakfastSpent = prompt("How much did you spend daily in breakfast when you didn't have it at home?");

//Console.log out the response
console.log(breakfastSpent);

var breakfastOut = parseInt(daysOfWeek - breakfastHome);

var breakfastTotalSpent = parseInt(breakfastOut * breakfastSpent);

console.log("You spent $" +breakfastTotalSpent+ " on breakfast this past week.");
alert("You spent $" +breakfastTotalSpent+ " on breakfast this past week.");


//Ask the user what year ther were born in
//Create a variable to catch their answer
var lunchHome = prompt("How many days did you have lunch at home?");

//Console.log out the response
console.log(lunchHome);


//Ask the user what year ther were born in
//Create a variable to catch their answer
var lunchSpent = prompt("How much did you spend daily in lunch when you didn't have it at home?");

//Console.log out the response
console.log(lunchSpent);

var lunchOut = parseInt(daysOfWeek - lunchHome);

var lunchTotalSpent = parseInt(lunchOut * lunchSpent);

console.log("You spent $" +lunchTotalSpent+ " on lunch this past week.");
alert("You spent $" +lunchTotalSpent+ " on lunch this past week.");


//Ask the user what year ther were born in
//Create a variable to catch their answer
var dinnerHome = prompt("How many days did you have dinner at home?");

//Console.log out the response
console.log(dinnerHome);


//Ask the user what year ther were born in
//Create a variable to catch their answer
var dinnerSpent = prompt("How much did you spend daily in dinner when you didn't have it at home?");

//Console.log out the response
console.log(dinnerSpent);

var dinnerOut = parseInt(daysOfWeek - dinnerHome);

var dinnerTotalSpent = parseInt(dinnerOut * dinnerSpent);

console.log("You spent $" +dinnerTotalSpent+ " on dinner this past week.");
alert("You spent $" +dinnerTotalSpent+ " on dinner this past week.");


//Ask the user what year ther were born in
//Create a variable to catch their answer
var snack = prompt("How much did you spend on snacks daily?");

//Console.log out the response
console.log(snack);

var snackSpent = parseInt(daysOfWeek * snack);

console.log("You spent $" +snackSpent+ " on snacks this past week.");
alert("You spent $" +snackSpent+ " on snacks this past week.");

//Ask the user what year ther were born in
//Create a variable to catch their answer

alert("While our system is adding up your weekly spent, let's do a quick test.\nYou will give me a positive number and I will add it up to all the other consecutive numbers lower than it");
var y=1
var temp=prompt("Please type in your positive number:") //Create a variable to catch their answer
for (x=2;x<=temp;x++){
y=y+x
}
alert("1+2+...+"+temp+"="+y)


alert("Now, let's find out how much you spent for this past week")

var total = Number(breakfastTotalSpent) + Number(lunchTotalSpent) + Number(dinnerTotalSpent) + Number(snackSpent);



//the result
console.log("You spent $" +total+ " on food this past week.");
alert("You spent $" +total+ " on food this past week.");

alert(+name+", thank you for participating on our survey!")




