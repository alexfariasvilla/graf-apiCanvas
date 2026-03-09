function draw() {

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// RECTANGULO VERDE
ctx.fillStyle = "green";
ctx.fillRect(20,20,100,100);

// TRIANGULO
ctx.beginPath();
ctx.moveTo(200,20);
ctx.lineTo(250,120);
ctx.lineTo(150,120);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

// HAPPY FACE
ctx.beginPath();
ctx.arc(380,70,40,0,Math.PI*2,true);
ctx.moveTo(405,70);
ctx.arc(380,70,25,0,Math.PI,false);
ctx.moveTo(370,60);
ctx.arc(365,60,5,0,Math.PI*2,true);
ctx.moveTo(395,60);
ctx.arc(390,60,5,0,Math.PI*2,true);
ctx.stroke();

// LINEAS
ctx.beginPath();
ctx.moveTo(20,180);
ctx.lineTo(120,180);
ctx.lineTo(120,230);
ctx.lineTo(20,230);
ctx.closePath();
ctx.stroke();

// ARCOS
ctx.beginPath();
ctx.arc(220,205,25,0,Math.PI);
ctx.stroke();

// CURVA CUADRATICA
ctx.beginPath();
ctx.moveTo(300,180);
ctx.quadraticCurveTo(350,140,400,180);
ctx.stroke();

// CURVA BEZIER
ctx.beginPath();
ctx.moveTo(300,240);
ctx.bezierCurveTo(320,200,380,280,420,240);
ctx.stroke();

// COMBINACION
ctx.fillStyle = "purple";
ctx.fillRect(20,300,80,50);

ctx.beginPath();
ctx.moveTo(20,300);
ctx.lineTo(100,350);
ctx.stroke();

ctx.beginPath();
ctx.arc(160,325,25,0,Math.PI*2);
ctx.stroke();

}