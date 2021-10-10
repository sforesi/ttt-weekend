/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
	// array of arrays 
		// subArrays represent a collection of winning positions on the board
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
// state of the game, what's happpening on the board 
let boardArray = [], playerTurn, isWinner


/*------------------------ Cached Element References ------------------------*/
// stored elements from the HTML, connecting to the JS 
const allBoxes  = document.querySelectorAll(".brdSq") 
const boardEl = document.querySelectorAll(".board")
const replayBtn = document.querySelector("#replayBtn")
const gameStatus = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/
// waiting to listen to user input - THE WHOLE FUN OF JS 
replayBtn.addEventListener('click', init)

// listens for player 'click' on replay button  



allBoxes.forEach(square => {
	square.addEventListener('click', handleClick)
});

// listens for player 'click' on one of the game squares, then calls the function handleClick

/*-------------------------------- Functions --------------------------------*/
function handleClick(evt){ // the function that deals with what happens when a user clicks 
	const id = [evt.target.id.slice(2)] // take the 'sq' out of our id 
	replayBtn.removeAttribute("hidden") // remove the replay button 'hidden' attribute
	if (checkValid(id)){ // check if user input 'click' is valid 
		boardArray[id]= playerTurn // identify who's turn it is by checking the value of the square  
		switchTurn() // switch user  
		render() // call the render function 
		getWinner()
	} 
	
}

//return value 

function checkValid (id){ // check to see if user input click on the square is valid (no dups)
	if(boardArray[id] !== null){ // checks to if there's a value of (1,-1)
		return false // if false end loop (don't execute any further) 
} else{
		return true // go ahead and mark the square 
}

}


init() // initialize function 
function init(){
	boardArray = 
	[null, null, null, null, null, null, null, null, null] // assigns the value of the squares to null/ no moves have been made
	playerTurn = 1 // player 1 = 1 
	isWinner = null // the game just started so no winner yet!
	render(); // calls the render function 
}


function render() {
	for(let i = 0; i < boardArray.length; i++){ // iterate through the board squares by one 
		if(boardArray[i] === 1){ // checks to see if any elements in the boardArray are = 1   
			allBoxes[i].innerText = 'X' // if one is , mark an X in the corresponding square 
		} else if (boardArray[i] === -1) { // if any of the elements in the array = -1 
			allBoxes[i].innerText = 'O' // if one is, mark an 0 
		} else {
			allBoxes[i].innerText = '' // if it's any other value mark 'nothing'
		} 
			updateGameStatus()
			assignTurn()
	}
} 
function switchTurn(){
	playerTurn *= -1
	
}

function assignTurn(){//function to display who's turn it is in the html 
  if (playerTurn === 1 || playerTurn === null){
    playerName = "X"
  } else if(playerTurn === -1){
    playerName = "O"
  }
}

function updateGameStatus(){
	if (isWinner === 'T') {
		gameStatus.innerText = "The game is tied"
	} else if (isWinner !== null){
		gameStatus.innerText = `${isWinner} won the Game`
	}else {
		gameStatus.innerText = `It's ${playerTurn}'s turn'`
	}
}


// function to determine whether or not there is a winning user on the board 
function getWinner(){
	for (let index = 0; index < winningCombos.length; index++) { // for loop to iterate throught the winning combos array
		const a = winningCombos[index][0]; // access the winning combos in column 0, define as const a
		const b = winningCombos[index][1] // access the winning combos in column 1, define as const b 
		const c = winningCombos[index][2] // access the winning combos in column 2, define as const c
		if (boardArray[a] + boardArray[b] + boardArray[c] === 3) { // look at elements in positions of the array a,b,c add them together, if they = 3 
			console.log('winner, baby!') // we have a winner 
		}
	
	}
}

