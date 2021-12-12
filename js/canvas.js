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

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
const gra1 = ctx6.createLinearGradient(0,0,600,400);
gra1.addColorStop(0, 'red');
gra1.addColorStop(0.5, 'white');
gra1.addColorStop(1,'blue');


ctx6.fillStyle=gra1;
ctx6.fillRect(150, 100, 300, 200);

const canvas7 = document.getElementById('canvas7');
const ctx7 = canvas7.getContext('2d');
ctx7.lineWidth = 50;
ctx7.strokeStyle = gra1;
ctx7.lineWidth = 50;
ctx7.shadowColor = '#333';
ctx7.shadowBlur = 20;
ctx7.strokeRect(150,100, 300, 200);

const canvas8 = document.getElementById('canvas8');
const ctx8 = canvas8.getContext('2d');
const gra2 = ctx8.createRadialGradient(300,200,5, 300,200,300)
gra2.addColorStop(0,'red');
gra2.addColorStop(0.5,'white')
gra2.addColorStop(1,'blue');
ctx8.fillStyle = gra2;
ctx8.fillRect(50, 50, 500, 300);

const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const gra3 = ctx9.createRadialGradient(300,200,5, 300,200,125);
gra3.addColorStop(0, 'red');
gra3.addColorStop(0.2, 'orange');
gra3.addColorStop(0.4, 'yellow');
gra3.addColorStop(0.6, 'green');
gra3.addColorStop(0.8, 'blue');
gra3.addColorStop(1, 'purple');
ctx9.moveTo(300,50);
ctx9.lineTo(200,350);
ctx9.lineTo(450,160);
ctx9.lineTo(150,160);
ctx9.lineTo(400,350);
ctx9.lineTo(300,50);
ctx9.shadowColor="gold";
ctx9.shadowBlur = 20;
ctx9.fillStyle = gra3;
ctx9.fill();