	

	// VARIABLES
	// ==========================================================================

	// All the variables that will help us keep track of our stats.
	var word;
	var letter;
	var wins = 0;
	var losses = 0;
	var remaining = 10;
	var guesses;
	// Our array of all words and letters available.
	var wordArray = ["quiet", "greet", "volcano", "dependent", "tumble", "auspicious",
						"troubled", "company", "position", "knife", "advertisement", "deeply"];
	var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	
	// Variables that will print on page.
	var winsText = document.getElementById("wins-text");
	var lossesText = document.getElementById("losses-text");
	var remainingText = document.getElementById("remaining-text");
	var wordText = document.getElementById("word-text");
	var guessesText = document.getElementById("guesses-text");
	// Empty array to store user guesses.
	var guessesArray;
	// Variable to assist in finding the word in the array for our random generator.
	var wordNumber;
	var wordPosArray = [];
	var wordIndexArray = [];
	var holderArray = [];
	var holder2Array = [];
	
		 
	
	// FUNCTIONS
	// ==========================================================================
		 
	// Function to start the game.
	function start () { 
	// Empties user guesses array.	
	guessesArray = [];
	// (Re)sets remaining guesses to 10.
	remaining = 10;
	// Randoms a number and then finds corresponding letter in all letters array.
	wordNumber = Math.floor(Math.random() * 12);
	word = wordArray[wordNumber];
	fill();
	display();	
	console.log(word);
	console.log(wordPosArray);
	console.log(wordIndexArray);
	}

	// Function to run to fill the empty spaces.
	function fill () {
		for (var i = 0; i < word.length; i++) {
			
    		wordPosArray.push(word.charAt(i));
			wordIndexArray.push((letterArray.indexOf(wordPosArray[i])));
			holderArray.push(" _");	
			holder2Array = holderArray.join("");
			}
		}

	// Function to run when user wins, adds one to "wins" and then restarts the game.
	function win () {
	alert("Yay! You win!");
	wins++;
	start();
	}

	// Function to run when user loses, adds one to "losses" and then restarts the game.
	function lose () {
	alert("You are a loser.....of this game!");
	losses++;
	start();
	}

	// Function to run when we need to update the stats.
	function display () {
	winsText.textContent = wins;
	lossesText.textContent = losses;
	remainingText.textContent = remaining;
	guessesText.textContent = guessesArray;
	wordText.textContent = holder2Array;
	}

		
	
    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.	
	start();

	// // When the user presses a key, it will run the following function to add user guesses to array.
	document.onkeyup = function(event) {
	guesses = letterArray.indexOf(event.key);
	guessesArray.push(" " + event.key);

	

	var compare = wordIndexArray.indexOf(guesses);

	for (var i = 0; i < word.length; i++) {

	
	if (compare !== -1) {
		console.log(compare);
		console.log("yes");
		console.log(event.key);
		word.indexOf(event.key);

			if (word !== -1) {
    		event.key[guesses] = 1010;
			}

		// for (var i = -1; i < compare; i++) {
    		
  //   		holderArray.push(" _");
		// 	holder2Array = holderArray.join("");	
			
		// 	}

		// for (var i = 0; i < Things.length; i++) {
		// 	Things[i]
		// }
		
		// for (var i = 0; i < Things.length; i++) {
		// 	Things[i]
		// }
		

	}

	else {


		console.log("wrong");

	}

	


}






	console.log(guesses);

	

		// Runs this code first to make sure user pressed a valid key.
	  	if (guesses !== -1 && remaining > 0) {
	  		// If user guessed right, then win.
	  		if (event.key === letter) {
				display();
				
			}
			// If user did not guess correctly, number of guess reduces by 1.
					else {
						remaining--;
						display();
						// If by reducing 1, the number of guesses equals 0, user loses.
						if (remaining === 0) {
							lose();
						}
					}
		}
		// If invalid key was used, alert user, reduce number of guesses by 1.
		else if (guesses === -1 && remaining > 0) {
			alert("Please use letters, numbskull.");
			remaining--;
			display();
			// If by reducing 1, the number of guesses equals 0, user loses.
			if (remaining === 0) {
				lose();
			}
		}	
			
		// If no guesses are left, user loses.
		else {
			lose();
		}		
	};
	
	
		


