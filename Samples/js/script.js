//Ask the user what year ther were born in
//Create a variable to catch their answer

var daysOfWeek = 7;
var dinnerHome = prompt("How many days did you have dinner at home?");

//Console.log out the response
console.log(dinnerHome);


//Ask the user what year ther were born in
//Create a variable to catch their answer

var dinnerSpent = prompt("How much did you spend in dinner when you didn't have it at home?");

//Console.log out the response
console.log(dinnerSpent);

var dinnerOut = Number(daysOfWeek - dinnerHome);

var dinnerTotalSpent = Number(dinnerOut * dinnerSpent);

console.log("You spent $" +dinnerTotalSpent+ " on dinner this past week.");
alert("You spent $" +dinnerTotalSpent+ " on dinner this past week.");


//Ask the user what year ther were born in
//Create a variable to catch their answer

var snack = prompt("How much did you spend on snacks daily?");

//Console.log out the response
console.log(snack);


var snackSpent = Number(daysOfWeek * snack);
//Ask the user what year ther were born in
//Create a variable to catch their answer


var totalSpent = Number(dinnerSpent + snackSpent);


//the result
console.log("You spent $" +totalSpent+ " on food this past week.");
alert("You spent $" +totalSpent+ " on food this past week.");