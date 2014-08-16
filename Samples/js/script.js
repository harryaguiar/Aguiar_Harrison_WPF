var timeIn = prompt("Hi " +name+ "! What year did you start at college?");

//Console.log out the response
console.log(timeIn);


//Ask the user what year they expect to graduate
//Create a variable to catch their answer

var timeOut = prompt("In what year is your expected Graduation date?");

//Console.log out the response
console.log(timeOut);
//Current Year and subtract the year ther were born

//Create a variable for the current year

var yearBorn = prompt("In what year did you born?"); //find out what year they born

var currentYear = 2014

var currentAge = Number(currentYear) - Number(yearBorn);
console.log(currentAge);

var graduationAge = Number(timeOut) - Number(currentAge); 
console.log(graduationAge)

//the result
console.log(name+ ", you are " +currentAge+ " years old. You will be " + graduationAge + "years old at your Graduation.");
alert(name+ ", you are " +currentAge+ " years old. You will be " + graduationAge + "years old at your Graduation.");