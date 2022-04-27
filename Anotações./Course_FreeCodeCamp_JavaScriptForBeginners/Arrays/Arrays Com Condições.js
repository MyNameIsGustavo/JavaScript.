//Arrays com condições - Example.

var nomes = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function GolfScore (Par, Strokes){
    if ( Strokes == 1){
        return nomes[0]
    }
    else if (Strokes <= Par - 2) {
        return nomes [1]
    }
    else if (Strokes == Par - 1) {
        return nomes [2]
    }
    else if (Strokes == Par) {
        return nomes [3]
    }
    else if (Strokes == Par + 1) {
        return nomes [4]
    }
    else if (Strokes == Par + 2) {
        return nomes [5]
    }
    else if (Strokes >= Par + 3) {
        return nomes [6]
    }
}
console.log(GolfScore(5,4));