

let choosenCell = null;
let destinationCell = null;

// this adds an event listener to each cell
// so that each time a cell is clicked
// it will be determined if it is the first click or the second click
// if it's first click then the choosenCell will be the piece that was clicked and it will be recorded
// it it's second click then destinationCell will be the cell we want to move to
// but before moving it will be checked if it's legal to move to that cell
Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.addEventListener("click", (e) => {
    
        // determine if it's the first click or the second click
        if (choosenCell === null) {
            choosenCell = e.target.id.split("-").map((num) => parseInt(num));
        } else {
            // in this case it's the second click
            // so we need to check if moving to this destination cell is legal
            destinationCell = e.target.id.split("-").map((num) => parseInt(num));

            if (
                // this cheks if the choosenCell was empty
                // if it is then we don't need to do anything
                !(game[choosenCell[0]][choosenCell[1]] === "") && 

                // this checks if the user clicked on the same cell for choosenCell and destinationCell
                !(choosenCell[0] === destinationCell[0] && choosenCell[1] === destinationCell[1])

                
            ) {
                game[destinationCell[0]][destinationCell[1]] = game[choosenCell[0]][choosenCell[1]];
                game[choosenCell[0]][choosenCell[1]] = "";
                choosenCell = null;
                destinationCell = null;
                renderBoard();

            }
        }
            
    });
})