
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

}

