var random = [ "twice", "aoa", "gfriend", "pristin", "running man", "knowing bros"]
var losses = 0;
var wins = 0;
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
	underScoreArray = underScoreArray.join(" ");
//console.logging to confirm changes	
	console.log(underScoreArray);
//messing around with javascript to identify the Id	
	document.getElementById("hangmanWord").innerHTML= underScoreArray;
//adding classes to the Id section
	$("#hangmanWord").addClass("text-center h2");
		return underScoreArray;
	}

function checkingLetters(keyCode) {
	console.log("checkingLetters() check: " + keyCode);
	for (i = 0; i <answer.length; i++) {
		console.log(answer[i].charCodeAt());
		if (keyCode === answer[i].charCodeAt()) {
			console.log("i found it in the array!");
	} else {
		console.log("i did not find it in the array!");
		
		}
	}

}

function endScreen() {

}

function restartGame() {


}


// runs the game on load
$(window).on("load", function() {
  pickRandom();
  // checking to see if the word gets passed over  generateUnderscore(word);
  generateUnderscore(word);

  $(window).on("keyup", function(event){
    	checkingLetters(event.keyCode);
    });
  console.log(answer);
  
});












//    // Hangman
//   canvas =  function(){

//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
  
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
    
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
   
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
  
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
  
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
  
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
  
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
  
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
  
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
  
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
  
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

