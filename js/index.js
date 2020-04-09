// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let animateId = null;
let canvasWidth = 500;

// CREATING ROAD MAP
const roadMap = () => {
	canvas.style.background = 'url(/images/road.png)';
	canvas.style.background += 'no-repeat';
};

// CAR OBJECT
let carObj = {
	x: 122,
	y: 350
};

// OBSTICLE OBJECT
let obsticle = {
	x: Math.floor(Math.random() * 180),
	y: 0
};

// OBSTICLE DRAWING
const obsticleDrawing = () => {
	ctx.fillStyle = 'red';
	ctx.fillRect(obsticle.x, obsticle.y, 80, 20);
};

// CAR IMAGE LOADED
let carImage = new Image();
carImage.src = './images/car.png';

// CREATING CAR DRAWING
const carDrawing = () => {
	ctx.drawImage(carImage, carObj.x, carObj.y, 35, 60);
};

//MOVING THE CAR WITH KEYS
document.body.onkeypress = function(e) {
	if (e.key === 'd' && carObj.x <= 220) {
		//Move right
		carObj.x += 20;
	}
	if (e.key === 'a' && carObj.x >= 42) {
		//Move left
		carObj.x -= 20;
	}
};

// AVOID COLLISION

// const detectCollision = () => {
// 	let total = 0;

// 	let rect1 = { x: obsticle.x, y: obsticle.y, width: 80, height: 20 }; //Our obsticle

// 	let rect2 = { x: carObj.x, y: carObj.y, width: 35, height: 60 }; //Our car

// 	if (
// 		!rect1.x < rect2.x + rect2.width &&
// 		!rect1.x + rect1.width > rect2.x &&
// 		!rect1.y < rect2.y + rect2.height &&
// 		!rect1.y + rect1.height > rect2.y
// 	) {
// 		total += 10;
// 	}
// 	return total;
// };

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};

	// START GAME FUNCTION
	function startGame() {
		// Score Board
		// document.querySelector('h2').innerText = `Score : ${total}`;

		// EXECUTING ROAD MAP
		roadMap();

		// EXECUTING CAR DRAWING
		carDrawing();
		

		// ANIMATE FUNCTION
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas - flipping to a blank page

			carDrawing(); // Car Drawing
			obsticleDrawing(); // Obsticle Drawing

			animateId = window.requestAnimationFrame(animate); //Game rendering -infinite loop that goes super fast
		};
		animate();
	}
};
