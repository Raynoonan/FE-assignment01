// Create a Tic-Tac-Toe game grid using your HTML element of choice.
// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar
//      Bootstrap component should appear across the screen announcing the winner.

// connects box ids to variables
let box1 = $('#box1')
let box2 = $('#box2')
let box3 = $('#box3')
let box4 = $('#box4')
let box5 = $('#box5')
let box6 = $('#box6')
let box7 = $('#box7')
let box8 = $('#box8')
let box9 = $('#box9')

// assigns symbol to player
let player1 = 'X'
let player2 = 'O'

let turn = 0
let winner = false

// hide the alerts so they only show when needed
$('#tie').hide()
$('#winner').hide()


const winningPatterns = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box5, box9],
    [box3, box5, box7],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9]
]

let currentPlayer= ''

const endGame = () => {
 console.log("Game Over")
 $('.box').css('pointer-events', "none")
}


const declareWinner = (currentPlayer, a, b, c) => {

    if(a.text()=== currentPlayer && b.text()=== currentPlayer && c.text()=== currentPlayer) {
        winner = true

        if(currentPlayer === 'X') {
            currentPlayer = "Player1"
        } else {
            currentPlayer = "Player2"
        }

        $('#winner').text(`Game Over ${currentPlayer} wins!`)
        $('#winner').show()

        endGame()
    }
}

const checkPatterns = () => {
    declareWinner(currentPlayer,...winningPatterns[0])
    declareWinner(currentPlayer,...winningPatterns[1])
    declareWinner(currentPlayer,...winningPatterns[2])
    declareWinner(currentPlayer,...winningPatterns[3])
    declareWinner(currentPlayer,...winningPatterns[5])
    declareWinner(currentPlayer,...winningPatterns[6])
    declareWinner(currentPlayer,...winningPatterns[7])

    if(turn === 9 && winner === false) {
        endGame()
        $('#tie').show()
    }

}

const startGame = () => {
    currentPlayer = player1
    $('#player1').addClass('bg-info border border-dark')

    $('.box').on('click', function(){

        $(this).text(currentPlayer)

        if(turn > 4) {
          checkPatterns()  
        }
        if(winner === false) {

        if(currentPlayer === player1) {
            currentPlayer = player2
            console.log(turn++)
            $('#player2').addClass('bg-info border border-dark')
            $('#player1').removeClass('bg-info border border-dark')
        }else {
            currentPlayer = player1
            $('#player1').addClass('bg-info border border-dark')
            $('#player2').removeClass('bg-info border border-dark')
            turn++
        }
    }
    })

}

document.getElementById('start').addEventListener('click', ()=> startGame())
document.getElementById('reset').addEventListener('click', ()=> document.location.reload(true))