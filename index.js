const program = [], start = [], turn = [], aim = [], intake = []; 
let x1 = 0, x2, y1 = 0, y2, r;

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

