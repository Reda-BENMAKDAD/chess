
let origin = { x: null, y: null };
let destination = { x:null , y: null };

// this adds an event listener to each cell
// so that each time a cell is clicked
// it will be determined if it is the first click or the second click
// and do the appropriate action

Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
  cell.addEventListener("click", (e) => {

    // in this case it's the first click (to choose the piece we want to move)
    // we know it because origin coordinates are null
    if (origin.x === null && origin.y === null) {

      // we now set the coordinates of the cell we clicked on
      origin.x = e.target.id.split("-").map((num) => parseInt(num))[0];
      origin.y = e.target.id.split("-").map((num) => parseInt(num))[1];

    } else {

      // in this case it's the second click
      // because origin coordinates are already filled
      // we now set the coordinates of the cell we want to move to
      destination.x = e.target.id.split("-").map((num) => parseInt(num))[0];
      destination.y = e.target.id.split("-").map((num) => parseInt(num))[1];
      console.log(game[origin.x][origin.y]);
      
      // here we check if the move is legal
      if (
        // this cheks if the choosen cell was empty
        // if it is, then we don't need to do anything
        !(game[origin.x][origin.y] === "") &&

        // this checks if the user clicked on the same cell two times

        (game[origin.x][origin.y].canMove(origin, destination))
      ) {
        game[destination.x][destination.y] = game[origin.x][origin.y];
        game[origin.x][origin.y] = "";
        origin = { x: null, y: null}
        destination = { x: null, y: null}
        renderBoard();
      } else {
        destination = { x: null, y: null}
      }
    }
  });
});
