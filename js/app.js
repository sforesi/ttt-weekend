/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let boardArray = [], playerTurn, isWinner


/*------------------------ Cached Element References ------------------------*/

const allBoxes  = document.querySelectorAll(".brdSq")
const boardEl = document.querySelectorAll(".board")
// const replayBtn = document.querySelector("replayBtn")
const gameStatus = document.querySelector("#message")

console.log(allBoxes) 

/*----------------------------- Event Listeners -----------------------------*/
// form.addEventListener("reset", init)
// console.dir(section)


allBoxes.forEach(square => {
	square.addEventListener('click', handleClick)
});



/*-------------------------------- Functions --------------------------------*/
function handleClick(evt){
	console.log(evt.target.id)
	console.log(evt.target)
	const id = [evt.target.id.slice(2)]
	checkValid() 
	boardArray[id]= playerTurn 
	switchTurn()
	render()
	// evt.target.innerText = 'X'
}

function checkValid (){
	if (boardArray[id])
	console.log(id)
}

init()
function init(){
	boardArray = [null, null, null, null, null, null, null, null, null]
	playerTurn = 1 
	isWinner = null
	render();
}


function render() {
	console.log('hello')
	for(let i = 0; i < boardArray.length; i++){
		if(boardArray[i] === 1){
			console.log('hit')
			allBoxes[i].innerText = 'X'
		} else if (boardArray[i] === -1) {
			allBoxes[i].innerText = 'O' 
		} 
	}
} 
function switchTurn(){
	playerTurn = -1
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


