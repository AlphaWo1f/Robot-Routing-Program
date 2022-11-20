const program = [], start = [], turn = [], aim = [], intake = []; 

function showCoords(event) {
    var cX = event.clientX;
    var cY = event.clientY;
    var coords1 = "client - X: " + cX + ", Y coords: " + cY;
    document.getElementById("demo").innerHTML = coords1;
  }
