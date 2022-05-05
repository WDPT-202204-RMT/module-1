const myObstacles = [];

const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.firstChild);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.setX(this.getX() + this.getSpeedX());
    this.y += this.speedY;
  }
  setSpeedX(newSpeed) {
    this.speedX = newSpeed;
  }
  setSpeedY(newSpeed) {
    this.speedY = newSpeed;
  }

  getSpeedX() {
    return this.speedX;
  }
  getSpeedY() {
    return this.speedY;
  }

  setX(newX) {
    this.x = newX;
  }

  getX() {
    return this.x;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Player extends Component {
  constructor() {
    super(30, 30, "red", 0, 110);
  }

  setX(newX) {
    const oldX = this.x;
    this.x = newX;
    if (this.right() >= myGameArea.canvas.width || this.left() <= 0) {
      this.x = oldX;
    }
  }
}

const player = new Player();
myGameArea.start();

function updateObstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let x = myGameArea.canvas.width;
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, "green", x, 0));
    myObstacles.push(
      new Component(10, x - height - gap, "green", x, height + gap)
    );
  }
  myObstacles.forEach((element) => {
    element.setX(element.getX() - 1);
    element.update();
  });
}

function checkGameOver() {
  /* 	let crashed = false;

	myObstacles.forEach((obstacle) => {
		if (player.crashWith(obstacle)) {
			crashed = true;
		}
	}) */

  const crashed = myObstacles.some((obstacle) => {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
  }
}

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
}

document.onkeydown = (event) => {
  switch (event.key) {
    case "ArrowUp":
      player.setSpeedY(player.getSpeedY() - 1);
      break;
    case "ArrowDown":
      player.setSpeedY(player.getSpeedY() + 1);
      break;
    case "ArrowLeft":
      player.setSpeedX(player.getSpeedX() - 1);
      break;
    case "ArrowRight":
      player.setSpeedX(player.getSpeedX() + 1);
      break;
    default:
      break;
  }
};

document.onkeyup = () => {
  player.setSpeedX(0);
  player.setSpeedY(0);
};
