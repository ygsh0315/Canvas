const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle='red';
ctx1.fillRect(150,100,300,200);

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(50,50);
ctx2.lineTo(550,350);
ctx2.lineWith=10;
ctx2.strokeStyle='red';
ctx2.stroke();

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300,50);
ctx3.lineTo(50,350);
ctx3.lineTo(550,350);
ctx3.lineTo(300,50);
ctx3.lineWidth = 5; 
ctx3.strokeStyle = 'coral';
ctx3.fillStyle = 'cornflowerblue';
ctx3.stroke();
ctx3.fill();

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
ctx4.fillStyle = 'coral';
ctx4.shadowBlur = 30;
ctx4.shadowOffsetX = -10;
ctx4.shadowOffsetY = -10;
ctx4.shadowColor = 'black';
ctx4.fillRect(150, 100, 300, 200);

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
ctx5.fillStyle = 'green';
ctx5.shadowBlur = '20';
ctx5.shadowOffsetX = 0;
ctx5.shadowOffsetY = 0;
ctx5.shadowColor = 'black';
ctx5.lineWidth = 5;
ctx5.strokeStyle = 'yellow';
ctx5.moveTo(300,50);
ctx5.lineTo(150,300);
ctx5.lineTo(450,300);
ctx5.lineTo(300,50);
ctx5.stroke();
ctx5.fill();