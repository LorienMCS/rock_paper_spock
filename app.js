/* 
Bonus: If you finish rock paper scissors, 
make rock paper scissors lizard spock. 
I want to see the messages about what beats what! 

Could do timer with setTimeout (takes two parameters:
callback function (function passed to another function) and time elapsed)
*/

var human = 0;
var computer = 0;

function rock() {

	var guess = prompt("Please choose rock, paper, scissors, lizard or Spock");
	guess = guess.toUpperCase();
	if((guess !== "ROCK")&&(guess !== "PAPER")&&(guess !== "SCISSORS")&&(guess !== "LIZARD")&&(guess !== "SPOCK")){
		alert("That is not a valid response. Please choose again");
		rock();
	} else {

		var compGuess = Math.floor(Math.random() * 5);

		if(compGuess===convertGuess(guess)) {
			alert("Tie! Try again!");
			rock();

		} else if(compGuess===0) {
			if(convertGuess(guess)===1){
				alert("Paper covers rock! You win!");
				human++;
				person.innerHTML = human;
			} else if(convertGuess(guess)===2) {
				alert("Rock smashes scissors! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else if(convertGuess(guess)===3) {
				alert("Rock crushes lizard! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else {
				alert("Spock vaporizes rock! You win!");
				human++;
				person.innerHTML = human;
			}

		} else if(compGuess===1) {
			if(convertGuess(guess)===0){
				alert("Paper covers rock! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else if(convertGuess(guess)===2){ 
				alert("Scissors cut paper! You win!");
				human++;
				person.innerHTML = human;
			} else if(convertGuess(guess)===3){ 
				alert("Lizard eats paper! You win!");
				human++;
				person.innerHTML = human;
			} else {
				alert("Paper disproves Spock! You lose!");
				computer++;
				comp.innerHTML = computer;
			}

		} else if(compGuess===2) {
			if(convertGuess(guess)===0){
				alert("Rock smashes scissors! You win!");
				human++;
				person.innerHTML = human;
			} else if(convertGuess(guess)===1){
				alert("Scissors cut paper! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else if(convertGuess(guess)===3){
				alert("Scissors decapitate lizard! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else {
				alert("Spock crushes scissors! You win!");
				human++;
				person.innerHTML = human;
			}

		} else if(compGuess===3) {
			if(convertGuess(guess)===0){
				alert("Rock crushes lizard! You win!");
				human++;
				person.innerHTML = human;
			} else if(convertGuess(guess)===1){
				alert("Lizard eats paper! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else if(convertGuess(guess)===2){
				alert("Scissors decapitate lizard! You win!");
				human++;
				person.innerHTML = human;
			} else {
				alert("Lizard poisons Spock! You lose!");
				computer++;
				comp.innerHTML = computer;
			}

		} else {
			if(convertGuess(guess)===0){
				alert("Spock vaporizes rock! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else if(convertGuess(guess)===1){
				alert("Paper disproves Spock! You win!");
				human++;
				person.innerHTML = human;
			} else if(convertGuess(guess)===2){
				alert("Spock crushes scissors! You lose!");
				computer++;
				comp.innerHTML = computer;
			} else {
				alert("Lizard poisons Spock! You win!");
				human++;
				person.innerHTML = human;
			}
		}
	}
}

function convertGuess(str) {
	if(str === "ROCK"){
		return 0;
	} else if(str === "PAPER") {
		return 1;
	} else if(str==="SCISSORS") {
		return 2;
	} else if(str==="LIZARD") {
		return 3;
	} else {
		return 4;
	}	
}

var button = document.querySelector("button");

button.addEventListener("click", function(event){
		event.preventDefault();
		rock();
});


rock();
