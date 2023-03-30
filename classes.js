
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
            (origin.x === destination.x -1 && origin.y === destination.y -1) ||
            ((game[destination.x][destination.y].color !== this.color)))
            
    }

}

class Queen extends Piece {
    constructor (color) {
        super("queen", color);
    }
    canMove (origin, destination) {
        return true;
    }

}

class Bishop extends Piece {
    constructor (color) {
        super("bishop", color);
    }
    canMove (origin, destination) {
        return true;
    }
}

class Knight extends Piece {
    constructor (color) {
        super("knight", color);
    }
    canMove (origin, destination) {
        return true;
    }
}

class Rook extends Piece {
    constructor (color) {
        super("rook", color);
    }
    canMove (origin, destination) {
        return true;
    }
}

class Pawn extends Piece {
    constructor (color) {
        super("pawn", color);
    }

    canMove (origin, destination) {
        return true;
    }


}

