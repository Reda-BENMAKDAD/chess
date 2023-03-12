// #region render HTML with JS 
function initBoard(){
    // this function will create the board and give each cell its position as coordinates, to use it later
    board = document.getElementById("board");
    for (let i=8; i>0; i--){
        row = document.createElement("div");
        row.className = "row";
        row.id =  "r" + i;
        for (let j=1; j<9; j++){
            cell = document.createElement("div");
            cell.className = "cell";
            cell.setAttribute('tabIndex', '0')
            cell.id = "c" + (((i-1)*8)+j);
            cell.setAttribute("position", i+";"+j)
            row.append(cell);
        }
        board.append(row);
    }
    
}

initBoard()
// #endregion


let choosenCell = null;
let destinationCell = null;

Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.addEventListener("click", (e)=>{
        if (choosenCell) {
            destinationCell = e.target.attributes.position.value.split(";");
            game[choosenCell[0]-1][choosenCell[1]-1].move(destinationCell[0]-1, destinationCell[1]-1);
            
        } else {
            choosenCell = e.target.attributes.position.value.split(";");
        }
        
    });
});

let game = [
            [new Rook("black"), new Knight("black"), new Bishop("black"), new Queen("black"), new King("black"), new Bishop("black"), new Knight("black"), new Rook("black")],
            [new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black"), new Pawn("black")],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            [new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white"), new Pawn("white")],
            [new Rook("white"), new Knight("white"), new Bishop("white"), new Queen("white"), new King("white"), new Bishop("white"), new Knight("white"), new Rook("white")]];




function renderBoard() {
    for (let i=8; i>0; i--) {
        for (let j=1; j<9; j++) {
            // rendering image if there's a piece in the game array other
            let cell = document.getElementById("c" + (((i-1)*8)+j));
            if (game[i-1][j-1] != "") {
                cell.innerHTML = `<img src="${game[i-1][j-1].icon}">`;
            } else {
                cell.innerHTML = "";
            }
            
        }
    }
}

renderBoard()

