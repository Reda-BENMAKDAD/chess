
class Piece {
    constructor (name, color) {
        this.icon = `./icons/${color}-${name}.png`;
    }

    move (x, y) {
         game[x][y] = this;
         console.log(choosenCell)
         game[choosenCell[0]-1][choosenCell[1]-1] = "";
    }

}

class King extends Piece {
    constructor (color){
        super("king", color);
    }

}

class Queen extends Piece {
    constructor (color) {
        super("queen", color);
    }

}

class Bishop extends Piece {
    constructor (color) {
        super("bishop", color);
    }
}

class Knight extends Piece {
    constructor (color) {
        super("knight", color);
    }
}

class Rook extends Piece {
    constructor (color) {
        super("rook", color);
    }
}

class Pawn extends Piece {
    constructor (color) {
        super("pawn", color);
    }

    canMove (x, y) {
        if (choosenCell[0] == x && Math.abs(choosenCell[1] - y) == 1) {
            return true;
        }
        return false;
    }
}

