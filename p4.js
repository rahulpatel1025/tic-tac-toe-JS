const prompt = require("prompt-sync")();
// to make a move in a tic-tac-toe game
function makeMove(turn, board) {
    while (true) {
        const row = parseInt(prompt('Enter row (0-2): '));
        const col = parseInt(prompt('Enter column (0-2): '));
        if (isNaN(row) || isNaN(col) || row < 0 || row >= 3 || col < 0 || col >= 3) {
            console.log('Invalid input. Please enter numbers between 0 and 2.');
        } else if (board[row][col] !== '') 
            console.log('Cell already taken. Try again.');
            else {
                board[row][col] = turn
                break;
            }
        }
    }
//to print board    
function printBoard(board) {
    console.log ('Current Board');
    for (let i = 0; i < board.length; i++) {
        const row = board[i]
        let rowString = ' ';
        for (let j = 0; j < row.length; j++) {
            rowString += row[j]
            if (j != row.length -1)  rowString += ' | '
            }
            console.log(rowString);
            if (i != board.length-1) 
                console.log('-----------');
            
        }
    }
    
// to check for a win
function Checkwin(board, turn) {
    // check rows
    const lines = [
        [[0, 0], [0, 1], [0, 2]], //row 0   
        [[1, 0], [1, 1], [1, 2]], //row 1
        [[2, 0], [2, 1], [2, 2]], //row 2
        [[0, 0], [1, 0], [2, 0]], //col 0
        [[0, 1], [1, 1], [2, 1]], //col 1
        [[0, 2], [1, 2], [2, 2]], //col 2
        [[0, 0], [1, 1], [2, 2]], //diagonal1 \
        [[0, 2], [1, 1], [2, 0]] //diagonal2 / 
    ]
    for( let line of lines) {
    let win = true; 
    for(let pos of line) {
        const [row, col] = pos; // destructuring
        if (board[row][col] !==  turn) {
            win = false
            break;
        }
    } 
    if (win) return true;
    }
    return false;
}

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let turn = 'X';
let turnCount = 0;
let win = false; // Flag to check if there's a winner
printBoard(board);
console.log('Tic-Tac-Toe Game')
while(turnCount < 9){
    makeMove(turn, board) // Make a move
    printBoard(board) // Print the board
    win  = Checkwin(board, turn) // Check for a win
    if (win) {
        console.log('player ' + turn + ' won!')
        break;
    }
    if (turn === 'X') 
        turn = 'O'; // Switch turns
    else 
        turn = 'X'; // Switch turns
    turnCount++;
}
if(!win) 
    console.log('It is a draw!');

