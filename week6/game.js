//const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
//console.log(ctx);

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.p1 = new Player(this.canvas.width / 2, 0, 20, this.ctx, this.canvas);
    this.p2 = new Player(0, 0, 30, this.ctx, this.canvas);
    this.p3 = new Player(200, 50, 50, this.ctx, this.canvas);
    this.players = [this.p1, this.p2, this.p3];
    this.update();
  }
  start() {
    this.update();
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.players.forEach((player) => player.update());
    requestAnimationFrame(() => this.update());
  }
}

class Player {
  constructor(x, y, size, ctx, canvas) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.canvas = canvas;
    this.speedY = 2;
    this.speedX = 4;
  }

  draw() {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.draw();

    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y + this.size > this.canvas.height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }

    if (this.x + this.size > this.canvas.width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
  }
}

const game = new Game();
