const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radians = (degrees) => (Math.PI / 180) * degrees;

//save and restore
/* ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.save(); // save state settings
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.save();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.save();
ctx.fillStyle = "pink";
ctx.strokeStyle = "pink";

ctx.fillRect(10, 10, 20, 20);
ctx.restore(); // restore last saved settings
ctx.fillRect(30, 30, 20, 20);
ctx.restore();
ctx.fillRect(50, 50, 20, 20);
ctx.restore();
ctx.fillRect(70, 70, 20, 20);
ctx.restore();
ctx.fillRect(90, 90, 20, 20);
 */

let redValue = 0;
let rectX = 10;
let rectY = 10;

function drawSquare() {
  ctx.clearRect(0, 0, 300, 200);
  ctx.fillStyle = `rgb(${redValue % 256}, 0, 0)`;
  ctx.fillRect(rectX, rectY, 50, 50);
  redValue += 1;
  rectX = (rectX + 1) % 300;
  rectY = (rectY + 1) % 200;
  requestAnimationFrame(drawSquare);
}

drawSquare();
