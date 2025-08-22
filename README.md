# 🎮 Project-Based Learning: Tic-Tac-Toe in Node.js

This repository is part of my **project-based learning journey**, where I build applications step by step while explaining the coding process and its purpose.  
Here, I implemented a **Tic-Tac-Toe game** in **JavaScript (Node.js)** that allows two players to play from the terminal.

---

## 📌 Project Overview
- Two players take turns making moves (`X` and `O`).  
- The board updates after every move.  
- The game checks for a **win** or a **draw** after each turn.  
- Input validation ensures that players can’t overwrite cells or enter invalid positions.  

This project helped me practice:
- **2D arrays** to represent the game board  
- **Functions** for modular code (move handling, board printing, win checking)  
- **Loops & conditionals** for game flow control  
- **Validation & error handling** for better user experience  

---

## 📖 Step by Step Development

### 1. Setting Up Input
I used `prompt-sync` to get player input from the terminal:
```js
const prompt = require("prompt-sync")();
```
### 2. Making a Move

- Ask the player for row and column (0–2)

- Validate input (must be numbers between 0–2)

- Ensure the chosen cell is empty before placing the symbol

```js
function makeMove(turn, board) {
    while (true) {
        const row = parseInt(prompt('Enter row (0-2): '));
        const col = parseInt(prompt('Enter column (0-2): '));
        if (isNaN(row) || isNaN(col) || row < 0 || row >= 3 || col < 0 || col >= 3) {
            console.log('Invalid input. Please enter numbers between 0 and 2.');
        } else if (board[row][col] !== '') {
            console.log('Cell already taken. Try again.');
        } else {
            board[row][col] = turn;
            break;
        }
    }
}
```
### 3. Printing the Board

- Formatted output makes the board clear after each move:
```js
function printBoard(board) {
    console.log('Current Board');
    for (let i = 0; i < board.length; i++) {
        let rowString = ' ' + board[i].join(' | ');
        console.log(rowString);
        if (i != board.length - 1) console.log('-----------');
    }
}
```
### 4. Checking for a Win

- Defined all possible winning combinations (rows, columns, diagonals) and verified if the current player controls one of them:
  ```js
  function Checkwin(board, turn) {
    const lines = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (let line of lines) {
        if (line.every(([r, c]) => board[r][c] === turn)) {
            return true;
        }
    }
    return false;
  }
  ```
### 5. Game Loop

- Alternate turns between X and O

- Stop if a player wins or the board fills up (draw)
  ```js9
  let turn = 'X';
  let turnCount = 0;
  let win = false;

  while (turnCount < 9) {
    makeMove(turn, board);
    printBoard(board);
    win = Checkwin(board, turn);
    if (win) {
        console.log('Player ' + turn + ' won!');
        break;
    }
    turn = (turn === 'X') ? 'O' : 'X';
    turnCount++;
  }

  if (!win) console.log('It is a draw!');
  ```
## 🚀 How to Run

- Clone the repository:
git clone https://github.com/rahulpatel1025/tic-tac-toe-node.git
cd tic-tac-toe-node
- Install dependencies:
npm install prompt-sync
- Run the game: node p4.js

## 🎯 Learning Outcomes

- Through this project, I practiced:

- Using 2D arrays to represent structured data (the game board)

- Creating modular functions for reusability

- Input validation and error handling in a terminal program

- Designing a game loop with alternating turns

- Checking for winning conditions with arrays of positions



  
