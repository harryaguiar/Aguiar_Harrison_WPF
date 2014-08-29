/*
Harrison Aguiar
WPF 1408 Section 01
Functions Personal
8-27-14
*/


//Find out how much user will pay for a speeding ticket

(function() {//function to welcome user
    alert("Welcome to What's Up Studio");
}());


var name = prompt("Please type in your name.")//ask user name

while(name===""){//validation
	name=prompt("Don't leave this blank, it's required!\nPlease type in your name!")
}

console.log(name);//print out result

/*-------------------------------------------------------*/

var speedingTicket = prompt("Did you get a speeding ticket?")//ask user if he got a speeding ticket

if (speedingTicket === "") {//validation
	speedingTicket = prompt("Please enter yes or no!");
}else if (speedingTicket === "yes" || speedingTicket === "Yes") {//if user got a ticket
	speedLimit = prompt("What was the speed limit posted?"); //if so, ask user what was the speed limit allowed
}else{
	wrongPlace = alert("Thank you for your visit! We are here to help people who have got a speeding ticket!")// else, user does not go ahead to the other questions 
}


console.log("The speed limit posted is " +speedLimit+ " miles per hour");//print out result


/*-------------------------------------------------------*/

var speedDriven = prompt("How fast where you going?")//ask user how fast he was going to receive a ticket
console.log(speedDriven);//print out result

while(speedDriven===""){//validation
	speedDriven = prompt("Please type in how fast you were driving!")
}


console.log("You were driven at " +speedDriven+ " miles per hour");//print out result

/*-------------------------------------------------------*/

var mileageCost = prompt("What is the cost for every mile you go over the limit in your county?")//ask user how much is every mile he goes over the limit
while(mileageCost===""){//validation
	mileageCost = prompt("Please type in the cost of every mile you go over the limit!")
}

console.log("For every mile over the speed limit, you will be charged $" +mileageCost);//print out result
/*-------------------------------------------------------*/

var ticketPrice = calcTicket(speedLimit, speedDriven, mileageCost);//variable to calculate the ticket price

function calcTicket(L, D, C){//defining
	var ticket = (D - L) * C;//function calculation
	return ticket; //function spitting the info out
}
console.log("You will pay $" +ticketPrice+ " for this ticket!");//print out result




