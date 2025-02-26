
/** @type {HTMLCanvasElement} */

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];


const enemyImage = new Image();
enemyImage.src = '../sprites/enemy1.png';

class Enemy {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
    this.speed = (Math.random() * 4) - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
  }

  update(){
    this.x += this.speed;
    this.y += this.speed;
  }

  draw(){
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(enemyImage, this.x, this.y);

  }
};// Enemy{}







for (let i = 0; i < numberOfEnemies; i++){
  // const enemy = new Enemy();
  // enemiesArray.push(enemy);
  enemiesArray.push(new Enemy());

}





function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  for(const enemy of enemiesArray){
    enemy.update();
    enemy.draw();
  }

  requestAnimationFrame(animate)
}

animate();



//W: 1758
//H: 155
