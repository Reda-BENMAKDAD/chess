

let choosenCell = null;
let destinationCell = null;

Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.addEventListener("click", (e) => {
        if (choosenCell === null) {
            choosenCell = e.target.id.split("-").map((num) => parseInt(num));
        } else {

            if (!(game[choosenCell[0]][choosenCell[1]] === "")) {
            
                destinationCell = e.target.id.split("-").map((num) => parseInt(num));
                game[destinationCell[0]][destinationCell[1]] = game[choosenCell[0]][choosenCell[1]];
                game[choosenCell[0]][choosenCell[1]] = "";
                choosenCell = null;
                destinationCell = null;
                renderBoard();

            }
        }
            
    });
})