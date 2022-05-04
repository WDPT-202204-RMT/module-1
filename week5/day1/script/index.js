const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// change fill color
ctx.fillStyle = "blue";
// draw filled rectangle
ctx.fillRect(150, 150, 20, 10);

//change stroke color
ctx.strokeStyle = "red";
// draw outlined rectangle
ctx.strokeRect(200, 200, 50, 20);

// erases a rectangular area
ctx.clearRect(160, 150, 2, 2);

ctx.beginPath();

ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.stroke();

ctx.moveTo(10, 100);
ctx.lineTo(100, 10);
ctx.stroke();

ctx.closePath();
ctx.beginPath();

ctx.moveTo(10, 200);
ctx.lineTo(100, 200);
ctx.lineTo(10, 100);
ctx.lineTo(100, 100);

ctx.stroke();

ctx.closePath();

/* ctx.beginPath();

ctx.moveTo(200, 10);
ctx.lineTo(250, 10);
ctx.lineTo(200, 50);

ctx.fill();
ctx.closePath(); */

const toRadians = (degrees) => (Math.PI / 180) * degrees;

/* ctx.beginPath();

ctx.arc(200, 100, 20, toRadians(0), toRadians(30));
ctx.stroke();

ctx.closePath(); */
ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(250, 10);
ctx.arcTo(270, 10, 270, 20, 30);
ctx.lineTo(270, 20);
ctx.stroke();

ctx.closePath();
