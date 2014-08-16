/*
Harrison Aguiar
WPF 1408 Section 01
Expression Industry
8-14-14
*/

/*
Industry-specific: This second set should be something related to either your current job or the web design and development industry.
A good example of this would be something that calculates how many pixels square an image resolution is based on image dpi, width and height.
*/



//Say hello to the user and let them know what we are doing
//ALERT the user

alert("Hello! Let's find out how much money you made today. Click 'Ok' to start!")


// Ask the user their name
//Create a variable to catch their answer
var name = prompt("Please type in your name:");
console.log(name);//Console.log out the response




//Create a variable to catch their answer
var timeIn = prompt("Hi " +name+ "! What time did you get in?");//variable to find out what time user entered the job

//Console.log out the response
console.log(timeIn);



//Create a variable to catch their answer
var timeOut = prompt("What time are you getting out?");//variable to find out what time user is leaving the job

//Console.log out the response
console.log(timeOut);


var maxHours = 12;//variable for max of hours worked

var totalTime = (maxHours-timeIn) - (maxHours-timeOut); //variable for time working, store runs only from 12:00pm to 11:00pm

//Alert user total time worked
alert(name+ ", you worked " +totalTime+ " hours today.");


//Ask the user, how many deliveries they made
//Create a variable to catch their answer
var deliveries = prompt("How many deliveries did you make today?");
console.log(deliveries);//Console.log out the response

var deliveryEachPay = 2.15; //variable for amount paid for each delivery

var deliveryTotal = deliveries * deliveryEachPay;//variable to find out how will be paid only for the deliveries

//Console.log out the response
console.log("You made " +deliveries+ " deliveries today and made $" + deliveryTotal +" on deliveries.");
alert("You made " +deliveries+ " deliveries today and made $" + deliveryTotal +" on deliveries."); //Alert user response

//Create a variable to catch their answer for how many miles driven
var milesDriven = prompt("How many miles did you drive today?");
console.log(milesDriven);//Console.log out the response

var mileageEachPay = 1.07; //variable for amount paid for each mileage


var milesTotal = milesDriven * mileageEachPay;//variable to find out how will be paid only for the mileage


//Make the result look pretty :)
console.log("You drove " +milesDriven+ " miles today and made $" + milesTotal +" on mileage.");//Console.log out the response
alert("You drove " +milesDriven+ " miles today and made $" + milesTotal +" on mileage");//Alert user response

var totalPay = milesTotal + deliveryTotal;//variable for total amount made on the night



//The result
console.log("Thank you for your hard work " +name+ ". You made $" +totalPay+ " today. Enjoy the rest of your day! See you tomorrow! :)");//Console.log out the response
alert("Thank you for your hard work " +name+ ". You made $" +totalPay+ " today. Enjoy the rest of your day! See you tomorrow! :)");//Alert user response

