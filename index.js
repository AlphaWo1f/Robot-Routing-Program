const program = []
let x1 = 1, x2, y1 = 1, y2, r = [0], netposx = 612.5, netposy = 612.5, counter = 1;;
//create a object to store each piece of code outputted
class instructions {
    constructor(xPrevious, yPrevious, xFinal, yFinal, rotationPrev, rotationFinal, aim, intake) {
        this.xPrevious = xPrevious;
        this.yPrevious = yPrevious;
        this.xFinal = xFinal;
        this.yFinal = yFinal;
        this.rotationPrev = rotationPrev;
        this.rotationFinal = rotationFinal;
        this.aim = aim;
        this.intake = intake;
    }
}

function getCoords(x2, y2){

    console.log("x2: ", x2)
    console.log("y2: ", y2)

}


function showCoords(event) {



    var x2 = event.clientX - 7;
    var y2 = 750 - event.clientY;

;
    if(x2>x1 && y2>y1){
        r[counter] = Math.atan((x2-x1)/(y2-y1))
    }else if(x2<x1 && y2<y1){
        r[counter] = Math.atan((y1-y2)/(x1-x2))
    }else if(x2>x1 && y2<y1){
        r[counter] = Math.atan((y1-y2)/(x2-x1))
    }else if(x2<x1 && y2>y1){
        r[counter] = Math.atan((x1-x2)/(y2-y1))
    }else{
        r[counter] = 0
    }

    //work on logic for the rotation
    r[counter] = r[counter] - r[counter-1] 
    console.log("r: ", r)



    var coords1 = "X2: " + x2 + ", Y2: " + y2 + ", x1: " + x1 + ", y1: " + y1 +", Rotation: " + r[counter];
    x1 = x2
    y1 = y2
    document.getElementById("demo").innerHTML = coords1;
    const robot = document.getElementById('robot');
    document.getElementById("robot").style.bottom= y2 + 20 +"px";  
    document.getElementById("robot").style.left= x2 + 20 + "px";
    getCoords(x2, y2)
    // let len = program.length
    // program.append(new instructions(program[len-2]))
    counter++;
  }

