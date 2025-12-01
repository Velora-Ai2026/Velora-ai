const canvas = document.getElementById("wave-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let t = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y =
      canvas.height / 2 +
      Math.sin((x + t) * 0.02) * 20 +
      Math.sin((x + t) * 0.01) * 10;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(0, 255, 255, 0.3)";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  t += 1;
  requestAnimationFrame(draw);
}
draw();
