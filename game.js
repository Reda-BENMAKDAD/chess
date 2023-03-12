// the Rook, Knight, ... classes are all subclasses of the Piece class
// that can be found in the classes.js file


// this is the main game array that will hold all the pieces
// to keep track of game state
let game = [
    [new Rook("white"), new Knight("white"), new Bishop("white"), new Queen("white"), new King("white"), new Bishop("white"), new Knight("white"), new Rook("white")],
    [new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white")],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    [new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black")],
    [new Rook("black"), new Knight("black"), new Bishop("black"), new Queen("black"), new King("black"), new Bishop("black"), new Knight("black"), new Rook("black")]
]

// #region initialize game and rendering board
function initiGame() {
    // this function will simply create the board and give to each cell an id that specifies its position
    let board = document.getElementById("board");
    for (let i=0; i<8; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        // here i am not adding 1 to i because it will be easier to use the id to get the position of the cell in the 2 dimensional array
        row.id = `row-${i}`;
        board.appendChild(row);
        for (let j=0; j<8; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            // same here for the id
            cell.id = `${i}-${j}`;
            row.appendChild(cell);
        }
    }
}


function renderBoard() {
    // this function will re-render the board and basically it will be called every time a move is made
    // to update pieces positions
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            let cell = document.getElementById(`${i}-${j}`);
            cell.style.backgroundImage = game[i][j] ? `url(\"${game[i][j].icon}\")` : "";
        }
    }
}

// #endregion

initiGame();
renderBoard();