
/** @type {HTMLCanvasElement} */

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;



class Enemy {
  constructor(){
    this.image = new Image();
    this.image.src = '../sprites/enemy1.png';
    // this.speed = (Math.random() * 4) - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width); // brackets contents prevents going off screen
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 4 + 7); // Math.floor lets gameFrame be divisble by % (line 33)
  }

  update(){
    this.x += Math.random() * 3 - 1.5;
    this.y += Math.random() * 3 - 1.5;
    if (gameFrame % this.flapSpeed === 0 ){ // each bat rolls against GLOBAL ever-increasing gameFrame variable. (flapSpeed)
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  draw(){
    // this.x, this.y from update()
    ctx.drawImage(this.image, (this.frame * this.spriteWidth), (0), (this.spriteWidth), (this.spriteHeight), this.x, this.y, this.width, this.height);
  }
};// Enemy{}







for (let i = 0; i < numberOfEnemies; i++){
  enemiesArray.push(new Enemy());
}




//animation loop
function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  for(const enemy of enemiesArray){
    enemy.update();
    enemy.draw();
  }

  gameFrame++;

  requestAnimationFrame(animate)
}


animate();



//W: 1758
//H: 155

// 1h:47m