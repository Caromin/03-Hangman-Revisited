// global variables
var random = [ "twice", "aoa", "gfriend", "pristin", "running man", "knowing bros"]
var losses = 0;
var wins = 0;
var livesRemaining = 10;
var word = "";
var answer = [];
var underScoreArray = [];
var guessesArray = [];

function pickRandom() {
  word = random[Math.floor(Math.random() * random.length)];
  return word;
}

// word is the provided perameter from the pickRandom()
function generateUnderscore(word) {
// spliting word into individual characters in the underScoreArray
	underScoreArray = word.split('');
// setting the split word to var answer also, for comparison later on	
	answer = word.split('');
// creating a for loop to replace each index point with an underscore	
	for (i = 0; i < underScoreArray.length; i++) {
		underScoreArray.splice(i, 1, "_");
	}
// once the array is spliced I join the arrays with " " instead of ,'s
	// underScoreArray = underScoreArray.join(" ");
//console.logging to confirm changes	
	console.log(underScoreArray);
// messing around with javascript to identify the Id	
	document.getElementById("hangmanWord").innerHTML= underScoreArray.join(" ");
// adding classes to the Id section
	$("#hangmanWord").addClass("text-center h2");
		return underScoreArray;
	}

// checks the keypress and updates the info if the letter exists
function replacingDisplay(which) {
	var check = false;
	var event = String.fromCharCode(which);
	for (i = 0; i <answer.length; i++) {
		if (event === answer[i]) {
			console.log("yes it matches!");
			underScoreArray.splice(i, 1, event);
			document.getElementById("hangmanWord").innerHTML= underScoreArray.join(" ");
		check = true;
		} 
	}
	if (check) {
		if (answer.join(" ") === underScoreArray.join(" ")) {
			wins++;
			$('#totalWins').html(wins);
			alert("You won! The answer was " + word + "!");
			livesRemaining = 0;
		} 
	} else if (!check) {
		livesRemaining--;
		guessesArray.push(event);
		$('#answerDiv').html(guessesArray.join(", "));
		$('#answerDiv').addClass("text-danger h3");
		$('#livesLeft').html(livesRemaining);
		if (livesRemaining === 0 ) {
			alert("Game over! answer was " + word);
			losses++;
			$('#totalLosses').html(losses);
		}
	}
}


// restarts the game and updates the display
function RestartGame() {	
	pickRandom();
	generateUnderscore(word);
	livesRemaining = 10;
	$('#livesLeft').html(livesRemaining);
	$('#answerDiv').html(" ");
	console.log(answer);
}

// button to start game and hide the button
$('#startBtn').on('click', function() {
	$('#startBtn').hide();
	RestartGame();
})

// restarts the game with lives refreshed, but total wins/losses remaining
$('#restartGame').on('click', function() {
	RestartGame();
});

$(window).keypress(function(event){
	if (livesRemaining === 0) {
		return false;
	} else {
	replacingDisplay(event.which); 
	}
});
