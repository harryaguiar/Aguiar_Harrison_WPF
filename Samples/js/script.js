var name = prompt("Please type in your name:");
console.log(name);

var creditsTaken = prompt("How many credits have taken already?"); //credits already taken
console.log(creditsTaken);

var creditsNeeded = prompt("How many credits do you need to furfill your requirements?"); //credits needed to graduate
console.log(creditsNeeded)

var creditsLeft = Number(creditsNeeded) - Number(creditsTaken); //credits needed to take

console.log(name+ ", you still have " +creditsLeft+ " to take.");
alert(name+ ", you still have " +creditsLeft+ " to take.");



