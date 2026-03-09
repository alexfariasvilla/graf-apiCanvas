function draw() {

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";

ctx.fillRect(10, 10, 100, 100);

// Combinacion de lineas y figuras

// rectangulo
ctx.fillStyle = "purple";
ctx.fillRect(50, 400, 80, 50);

// linea
ctx.beginPath();
ctx.moveTo(50, 400);
ctx.lineTo(130, 450);
ctx.stroke();

// circulo
ctx.beginPath();
ctx.arc(200, 425, 25, 0, Math.PI * 2);
ctx.stroke();

}