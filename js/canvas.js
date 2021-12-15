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


const canvas10 = document.getElementById('canvas10');
const ctx10 = canvas10.getContext('2d');
const patImg1 = document.getElementById('pat1');
const myPat1 = ctx10.createPattern(patImg1, 'repeat');
ctx10.fillStyle = myPat1;
ctx10.fillRect(150,100,300,200);


const canvas11 = document.getElementById('canvas11');
const ctx11 = canvas11.getContext('2d');
const myImg1 = new Image();
myImg1.src = "img/pattern2.png";
myImg1.onload = function(){
    const myPat2 = ctx11.createPattern(myImg1,'repeat');
    ctx11.strokeStyle = myPat2;
    ctx11.lineWidth = 100;
    ctx11.strokeRect(150,100,300,200);
}

const canvas12 = document.getElementById('canvas12');
const ctx12 = canvas12.getContext('2d');

ctx12.beginPath();
ctx12.lineWidth = 10; 
ctx12.strokeStyle = 'coral';
ctx12.moveTo(50,100);
ctx12.lineTo(550,100);
ctx12.lineCap = 'round';
ctx12.stroke();

ctx12.beginPath();
ctx12.strokeStyle = 'cornflowerBlue';
ctx12.moveTo(50,200);
ctx12.lineTo(550,200);
ctx12.lineCap = 'square';
ctx12.stroke();

ctx12.beginPath();
ctx12.moveTo(50,300);
ctx12.lineTo(550,300);
ctx12.lineCap = 'butt';
ctx12.stroke();

const canvas13 = document.getElementById('canvas13');
const ctx13 = canvas13.getContext('2d');
ctx13.lineWidth = 20;
ctx13.lineCap = 'round';
ctx13.strokeStyle = 'cornflowerblue';


ctx13.beginPath();
ctx13.moveTo(50,300);
ctx13.lineTo(100,100);
ctx13.lineTo(150,300);
ctx13.lineJoin = 'milter';
ctx13.stroke();

ctx13.beginPath();
ctx13.moveTo(250,300);
ctx13.lineTo(300,100);
ctx13.lineTo(350,300);
ctx13.lineJoin = 'round';
ctx13.stroke();

ctx13.beginPath();
ctx13.moveTo(450,300);
ctx13.lineTo(500,100);
ctx13.lineTo(550,300);
ctx13.lineJoin = 'bevel';
ctx13.stroke();

const canvas14 = document.getElementById('canvas14');
const ctx14 = canvas14.getContext('2d');
ctx14.fillStyle = gra1;
ctx14.fillRect(150,100,300,200);
ctx14.clearRect(200, 150, 50, 50);

const canvas15 = document.getElementById('canvas15');
const ctx15 = canvas15.getContext('2d');
ctx15.beginPath();
ctx15.rect(50,50,300,200);
ctx15.fillStyle = gra1;
ctx15.fill();

ctx15.beginPath();
ctx15.moveTo(250,150);
ctx15.lineTo(500,150);
ctx15.lineTo(300,350);
ctx15.fillStyle = myPat1;
ctx15.fill();

const canvas16 = document.getElementById('canvas16');
const ctx16 = canvas16.getContext('2d');
const graRec = ctx16.createLinearGradient(0,0,600,400);
graRec.addColorStop(0, '#7CF7EF');
graRec.addColorStop(0.2, '#6AD496');
graRec.addColorStop(0.4, '#8DEB81');
graRec.addColorStop(0.6, '#B9D46A');
graRec.addColorStop(0.8,'#F5E882');

ctx16.beginPath();
ctx16.rect(50,50,500,300);
ctx16.fillStyle = graRec;
ctx16.fill();

ctx16.beginPath();
ctx16.moveTo(250,100);
ctx16.lineTo(350,100);
ctx16.lineTo(400,200);
ctx16.lineTo(350,300);
ctx16.lineTo(250,300);
ctx16.lineTo(200,200);
ctx16.lineTo(250,100);
ctx16.lineWidth = 20;
ctx16.lineCap = 'round';
ctx16.lineJoin = 'round';
ctx16.strokeStyle = 'cornflowerblue';
ctx16.stroke();