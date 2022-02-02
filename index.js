const can  = document.getElementById("myCanvas") ;
const context = can.getContext('2d');


let isDrawing = false;
let x = 0;
let y = 0;
var w = window.innerWidth;
var h = window.innerHeight;

// console.log(w , h)

can.width = w ;
can.height = h ;

can.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});
  
can.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 2 ;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}


window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});
  

function clear_screen(){
    context.clearRect(0, 0, can.width, can.height);
}
