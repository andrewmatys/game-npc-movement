const canvas2 = document.getElementById('canvas1');
const ctx2 = canvas2.getContext('2d');

const img = new Image();
img.src = '../sprites/enemy1.png';

img.onload = () => {
  console.log(`Width: ${img.width}px`);
  console.log(`Height: ${img.height}px`);
};