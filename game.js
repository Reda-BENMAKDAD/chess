
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
    let board = document.getElementById("board");
    for (let i=0; i<8; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.id = `row-${i+1}`;
        board.appendChild(row);
        for (let j=0; j<8; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `${i+1}-${j+1}`;
            row.appendChild(cell);
        }
    }
}

function renderBoard() {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            let cell = document.getElementById(`${i+1}-${j+1}`);
            cell.style.backgroundImage = game[i][j] ? `url(\"${game[i][j].icon}\")` : "";
        }
    }
}

initiGame();
renderBoard();