
class Piece {
    constructor (name, color) {
        this.name = name;
        this.color = color;
        this.icon = `./icons/${color}-${name}.png`;
    }



}

class King extends Piece {
    constructor (color){
        super("king", color);
    }
    canMove (origin, destination) {
    console.log("called can move from king");
    return  ((origin.x === destination.x  && origin.y === destination.y +1) || 
            (origin.x === destination.x  && origin.y === destination.y -1) ||
            (origin.x === destination.x +1 && origin.y === destination.y) ||
            (origin.x === destination.x -1 && origin.y === destination.y) ||
            (origin.x === destination.x +1 && origin.y === destination.y +1) ||
            (origin.x === destination.x +1 && origin.y === destination.y -1) ||
            (origin.x === destination.x -1 && origin.y === destination.y +1) ||
            (origin.x === destination.x -1 && origin.y === destination.y -1) ) &&
            ((game[destination.x][destination.y].color !== this.color));
            
    }

}

function arePiecesInTheWay(origin, destination) {
    let xDirection = destination.x - origin.x === 0 ? 0 : (destination.x - origin.x) / Math.abs(destination.x - origin.x);
    let yDirection = destination.y - origin.y === 0 ? 0 : (destination.y - origin.y) / Math.abs(destination.y - origin.y);
    let currentX = origin.x + xDirection;
    let currentY = origin.y + yDirection;
    while (currentX !== destination.x || currentY !== destination.y) {
        if (game[currentX][currentY] !== "") {
            return true;
        }
        currentX += xDirection;
        currentY += yDirection;
    }
    return false;
}

class Queen extends Piece {
    constructor (color) {
        super("queen", color);
    }
    canMove (origin, destination) {
        (Math.abs(origin.x - destination.x) === Math.abs(origin.y - destination.y) ||
            origin.x === destination.x ||
            origin.y === destination.y) &&
            ((game[destination.x][destination.y].color !== this.color)
            && !arePiecesInTheWay(origin, destination)
        );

    }

}

class Bishop extends Piece {
    constructor (color) {
        super("bishop", color);
    }
    canMove (origin, destination) {
        return Math.abs(origin.x - destination.x) === Math.abs(origin.y - destination.y) &&
            ((game[destination.x][destination.y].color !== this.color)
            && !arePiecesInTheWay(origin, destination)
        );
    }
}

class Knight extends Piece {
    constructor (color) {
        super("knight", color);
    }
    canMove (origin, destination) {
        return ((Math.abs(origin.x - destination.x) === 2 && Math.abs(origin.y - destination.y) === 1) ||
            (Math.abs(origin.x - destination.x) === 1 && Math.abs(origin.y - destination.y) === 2)) &&
            ((game[destination.x][destination.y].color !== this.color));

    }
}

class Rook extends Piece {
    constructor (color) {
        super("rook", color);
    }
    canMove (origin, destination) {
        return (origin.x === destination.x || origin.y === destination.y) &&
            ((game[destination.x][destination.y].color !== this.color)
            && !arePiecesInTheWay(origin, destination)
        );
    }
}

class Pawn extends Piece {
    constructor (color) {
        super("pawn", color);
    }

    canMove (origin, destination) {
        let direction = this.color === "white" ? 1 : -1;
        let isStartingPosition = (this.color === "white" && origin.x === 1) || (this.color === "black" && origin.x === 6);
        console.log(origin);
        console.log(destination);
        if (origin.y === destination.y) {
            if (destination.x === origin.x + direction && game[destination.x + direction][destination.y] === "" && !arePiecesInTheWay(origin, destination)) {
                return true;
                
            }
            if (isStartingPosition && destination.x === origin.x + 2 * direction && game[destination.x][destination.y] === "" && game[origin.x + direction][origin.y] === "" && !arePiecesInTheWay(origin, destination)) {
                return true;
            }
        } else {
            // Capture
            if (destination.x === origin.x + direction && Math.abs(destination.y - origin.y) === 1 && game[destination.x][destination.y] !== "" && game[destination.x][destination.y].color !== this.color) {
                return true;
            }
        }
        console.log(direction)
        console.log(isStartingPosition)
        console.log(game[destination.x][destination.y]);

        return false;
    }


}

