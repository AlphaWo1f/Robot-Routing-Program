const program = [], start = [], turn = [], aim = [], intake = []; 
let x1 = 0, x2, y1 = 0, y2, r;

function showCoords(event) {
    var x2 = event.clientX;
    var y2 = event.clientY;

    if(x2>x && y2>y){
        r = Math.atan((x2-x)/(y2-y))
    }else if(x2<x && y2<y){
        r = Math.atan((y1-y2)/(x1-x2))
    }else if(x2>x && y2<y){
        r = Math.atan((y1-y2)/(x2-x))
    }else if(x2<x && y2>y){
        r = Math.atan((x2-x)/(y2-y))
    }

    var coords1 = "client - X: " + x2 + ", Y coords: " + y2 + ", Rotation: " + r;
    document.getElementById("demo").innerHTML = coords1;

  }

