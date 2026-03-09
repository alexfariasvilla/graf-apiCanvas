function draw() {

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";

ctx.fillRect(10, 10, 100, 100);

function draw() {

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// CUADRADO VERDE
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// TRIANGULO
ctx.beginPath();
ctx.moveTo(75, 150);
ctx.lineTo(150, 250);
ctx.lineTo(0, 250);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

// HAPPY FACE
ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2, true);
ctx.moveTo(335, 150);
ctx.arc(300, 150, 35, 0, Math.PI, false);
ctx.moveTo(290, 135);
ctx.arc(285, 135, 5, 0, Math.PI * 2, true);
ctx.moveTo(320, 135);
ctx.arc(315, 135, 5, 0, Math.PI * 2, true);
ctx.stroke();

// LINEAS
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(200, 300);
ctx.lineTo(200, 350);
ctx.lineTo(50, 350);
ctx.closePath();
ctx.stroke();

// ARCOS
ctx.beginPath();
ctx.arc(300, 300, 40, 0, Math.PI);
ctx.stroke();

// CURVA CUADRATICA
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.quadraticCurveTo(400, 250, 450, 300);
ctx.stroke();

// CURVA BEZIER
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.bezierCurveTo(380, 320, 420, 380, 450, 350);
ctx.stroke();

// COMBINACION DE FIGURAS
ctx.fillStyle = "purple";
ctx.fillRect(50, 400, 80, 50);

ctx.beginPath();
ctx.moveTo(50, 400);
ctx.lineTo(130, 450);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 425, 25, 0, Math.PI * 2);
ctx.stroke();

}

}