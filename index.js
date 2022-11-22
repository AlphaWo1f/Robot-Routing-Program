const program = [], start = [], turn = [], aim = [], intake = []; 
let x1 = 0, x2, y1 = 0, y2, r;
//create a object to store each piece of code outputted
let instructions = {
    xPrevious: 0,
    yPrevious: 0,
    xFinal: 0,
    yFinal: 0,
    rotationPrev: 0,
    rotationFinal: 0,
    aim: false,
    intake: false,
}

function showCoords(event) {
    var x2 = event.clientX - 7;
    var y2 = 650 - event.clientY;

    if(x2>x1 && y2>y1){
        r = Math.atan((x2-x1)/(y2-y1))
    }else if(x2<x1 && y2<y1){
        r = Math.atan((y1-y2)/(x1-x2))
    }else if(x2>x1 && y2<y1){
        r = Math.atan((y1-y2)/(x2-x1))
    }else if(x2<x1 && y2>y1){
        r = Math.atan((x2-x1)/(y2-y1))
    }else{
        r = 0
    }


    var coords1 = "X2: " + x2 + ", Y2: " + y2 + ", x1: " + x1 + ", y1: " + y1 +", Rotation: " + r;
    x1 = x2
    y1 = y2
    document.getElementById("demo").innerHTML = coords1;

  }

