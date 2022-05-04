const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

/* ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "red";
ctx.fillRect(100, 10, 20, 20);

// use hex colors
ctx.strokeStyle = "#19661f";
ctx.strokeRect(10, 200, 20, 20);

// use rgb
ctx.fillStyle = "rgb(100, 40, 0)";
ctx.fillRect(10, 150, 20, 20);

ctx.fillStyle = "green";
ctx.fillRect(150, 150, 20, 20);
// transparency using globalAlpha
ctx.globalAlpha = 0.5;
ctx.fillStyle = "yellow";
ctx.fillRect(150, 150, 10, 10);

ctx.globalAlpha = 1;
ctx.fillRect(100, 100, 20, 20);
// using rgba
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(100, 100, 10, 10); */

/* ctx.beginPath();
// change line width
//ctx.lineWidth = 10;
//change line termination
//ctx.lineCap = "rounded";
//ctx.lineJoin = "bevel";
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.lineTo(250, 100);
ctx.stroke();
ctx.closePath(); */

/* const linearGradient = ctx.createLinearGradient(200, 10, 220, 35);
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "pink");
linearGradient.addColorStop(0.5, "purple");
linearGradient.addColorStop(0.2, "yellow");
ctx.fillStyle = linearGradient;

ctx.fillRect(180, 10, 60, 50);

const radialGradient = ctx.createRadialGradient(230, 230, 10, 230, 230, 35);
radialGradient.addColorStop(0, "red");
radialGradient.addColorStop(1, "pink");
radialGradient.addColorStop(0.5, "purple");
radialGradient.addColorStop(0.2, "yellow");
ctx.fillStyle = radialGradient;
ctx.fillRect(180, 180, 100, 100); */

// drawing text
/* ctx.font = "20px serif";
ctx.fillStyle = "black";
ctx.fillText("Hello, World", 150, 150);
ctx.font = "20px serif";
ctx.strokeStyle = "black";
ctx.strokeText("Hello, stroke", 150, 75); */

const img = new Image();
img.src = "/assets/puppy.jpg";
img.onload = () => {
  ctx.drawImage(img, 50, 100, 200, 150);
};
