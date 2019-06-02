namespace A10 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		let x: number;
		let y: number;
		drawBackground(canvas.width, canvas.height);

		for (let i: number = 0; i < 80; i++) {
			x = Math.random() * canvas.width;
			y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
			drawStones(x, y);

			if (i % 4 == 0) {
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height / 6 - 7) + (canvas.height / 6 * 5);
				drawSeaweed(x, y);		
				crc.lineWidth = 1;
			}

			if (i % 12 == 0) {
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height / 4 * 3);

				drawFishRound(x, y);
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height / 4 * 3);
				drawFishLong(x, y);
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height / 4 * 3);
				drawFishEdgy(x, y);
				
			}
		}
		
		drawPatrickS(350, 630);
		drawTQTentakel(canvas.width - 430, 620);
		/*if (Math.random() * 100 >= 75) {
			x = Math.random() * canvas.width;
			y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);			
			drawGary(x, y);
		}
		*/

		for (let j: number = 0; j < 100; j++) {
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height - 75);
				drawBubbles(x, y);
			}

		canvas.addEventListener("click", drawBubble);
	}

	function drawBackground(_x: number, _y: number): void {
		let background: Path2D = new Path2D();
		background.moveTo(0, 0);
		background.lineTo(0, _y / 6 + (_y / 6 * 4));
		background.lineTo(_x, _y / 6 + (_y / 6 * 4));
		background.lineTo(_x, 0);
		crc.fillStyle = "rgba(173, 216, 230, 0.5)";
		crc.fill(background);

		background = new Path2D();
		background.moveTo(_x, _y);
		background.lineTo(_x, _y / 6 + (_y / 6 * 4));
		background.lineTo(0, _y / 6 + (_y / 6 * 4));
		background.lineTo(0, _y);
		crc.fillStyle = "burlywood";
		crc.fill(background);
	}

	function drawStones(_x: number, _y: number): void {
		let stone: Path2D = new Path2D();
		stone.moveTo(_x , _y);
		stone.lineTo(_x + 3, _y + 3);
		stone.lineTo(_x + 6, _y);
		stone.lineTo(_x + 3, _y - 3);
		stone.closePath();
		crc.fillStyle = "gray";
		crc.strokeStyle = "darkgray";
		crc.fill(stone);
		crc.stroke(stone);
	}

	function drawSeaweed(_x: number, _y: number): void {
		let seaweed: Path2D = new Path2D();
		seaweed.moveTo(_x, _y);
		seaweed.quadraticCurveTo( _x + 20, _y - 20, _x, _y - 40);
		seaweed.quadraticCurveTo( _x - 15, _y - (20 + 40), _x, _y - 80);
		seaweed.quadraticCurveTo( _x + 10, _y - (20 + 80), _x, _y - 120);
		seaweed.quadraticCurveTo( _x - 6, _y - (15 + 120), _x, _y - 150);
		crc.strokeStyle = "darkgreen";
		crc.lineWidth = 5;
		crc.stroke(seaweed);
	}

	function drawFishRound(_x: number, _y: number): void {
		let fish: Path2D = new Path2D();
		let richtung: boolean;

		fish.moveTo(_x, _y);
		if (Math.random() * 2 >= 1) {
			richtung = true;
			fish.lineTo(_x - 38, _y - 13);
			fish.lineTo(_x - 38, _y + 13);
		}
		else {
			richtung = false;
			fish.lineTo(_x + 38, _y - 13);
			fish.lineTo(_x + 38, _y + 13);
		}
		crc.stroke(fish);
		crc.fillStyle = "green";
		crc.fill(fish);
		
		fish = new Path2D();
		fish.arc(_x, _y, 25, 0, 2 * Math.PI);
		crc.stroke(fish);
		crc.fillStyle = "lightgreen";
		crc.fill(fish);

		fish = new Path2D();
		if (richtung == true) 
			fish.arc(_x + 12, _y - 7, 2, 0, 2 * Math.PI);
		else 
			fish.arc(_x - 12, _y - 7, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(fish);
	}
	
	function drawFishLong(_x: number, _y: number): void {
		let fish: Path2D = new Path2D;
		let richtung: boolean;
		fish.moveTo(_x, _y);
		if (Math.random() * 2 >= 1) {
			richtung = true;
			fish.quadraticCurveTo(_x - 33, _y + 30, _x - 90, _y - 13);
			fish.lineTo(_x - 90, _y + 13);
			fish.quadraticCurveTo(_x - 33, _y - 35, _x, _y);
		}
		else {
			richtung = false;
			fish.quadraticCurveTo(_x + 33, _y + 30, _x + 90, _y - 13);
			fish.lineTo(_x + 90, _y + 13);
			fish.quadraticCurveTo(_x + 33, _y - 35, _x, _y);
		}
		crc.fillStyle = "orange";
		crc.strokeStyle = "black";
		crc.stroke(fish);
		crc.fill(fish);

		fish = new Path2D;
		if (richtung == true) 
			fish.arc(_x - 15, _y - 5, 2, 0, 2 * Math.PI);
		else
			fish.arc(_x + 15, _y - 5, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(fish);

	}

	function drawFishEdgy(_x: number, _y: number): void {
		let fish: Path2D = new Path2D;
		let richtung: boolean;
		fish.moveTo(_x, _y);
		if (Math.random() * 2 >= 1) {
			richtung = true;
			fish.lineTo(_x + 40, _y - 60);
			fish.lineTo(_x + 40, _y + 60);
		}
		else {
			richtung = false;
			fish.lineTo(_x - 40, _y - 60);
			fish.lineTo(_x - 40, _y + 60);
		}
		fish.lineTo(_x, _y);
		crc.stroke(fish);
		crc.fillStyle = "violet";
		crc.fill(fish);

		fish = new Path2D;
		if (richtung == true) {
			fish.moveTo(_x + 40, _y - 7);
			fish.lineTo(_x + 55, _y - 18);
			fish.lineTo(_x + 47, _y);
			fish.lineTo(_x + 55, _y + 18);
			fish.lineTo(_x + 40, _y + 7);
		}
		else {
			fish.moveTo(_x - 40, _y - 7);
			fish.lineTo(_x - 55, _y - 18);
			fish.lineTo(_x - 47, _y);
			fish.lineTo(_x - 55, _y + 18);
			fish.lineTo(_x - 40, _y + 7);
		}
		crc.stroke(fish);
		crc.fill(fish);

		fish = new Path2D;
		if (richtung == true)
			fish.arc(_x + 23, _y - 16, 2, 0, 2 * Math.PI);
		else
			fish.arc(_x - 23, _y - 16, 2, 0, 2 * Math.PI);
		crc.fillStyle = "black";
		crc.fill(fish);
	}

	function drawPatrickS(_x: number, _y: number): void {
		let fels: Path2D = new Path2D;
		fels.moveTo(_x - 200, _y);
		fels.arc(_x, _y, 200, 0, Math.PI, true);
		fels.quadraticCurveTo(_x, _y + 75, _x + 200, _y);

		let verlauf: CanvasGradient = crc.createLinearGradient(_x - 100, _y - 150, _x + 100, _y + 50);
		verlauf.addColorStop(0, "rgb(179, 83, 6)");
		verlauf.addColorStop(1, "rgb(114, 54, 5)");
		crc.fillStyle = verlauf;
		crc.fill(fels);

		fels = new Path2D;
		fels.moveTo(_x, _y - 190);
		fels.lineTo(_x + 10, _y - 215);
		fels.lineTo(_x - 30, _y - 205);
		fels.lineTo(_x - 20, _y - 215);
		fels.moveTo(_x - 30, _y - 205);
		fels.lineTo(_x - 17, _y - 202);

		fels.moveTo(_x + 10 , _y - 215);
		fels.lineTo(_x + 40, _y - 223);
		fels.lineTo(_x + 53, _y - 220);
		fels.moveTo(_x + 40, _y - 223);
		fels.lineTo(_x + 50, _y - 232);
		
		fels.moveTo(_x + 30, _y - 220);
		fels.lineTo(_x + 43, _y - 217);
		fels.moveTo(_x + 30, _y - 220);
		fels.lineTo(_x + 40, _y - 230);

		crc.lineWidth = 2;
		crc.strokeStyle = "brown";
		crc.stroke(fels);
		crc.lineWidth = 1;

	}

	function drawTQTentakel(_x: number, _y: number): void {
		let haus: Path2D = new Path2D;
		haus.moveTo(_x + 150, _y - 400);
		haus.lineTo(_x - 25, _y - 330);
		haus.lineTo(_x - 25, _y - 160);
		haus.lineTo(_x + 150, _y - 120);
		haus.lineTo(_x + 325, _y - 160);
		haus.lineTo(_x + 325, _y - 330);
		haus.closePath();
		crc.fillStyle = "lightgrey";
		crc.strokeStyle = "grey";
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.moveTo(_x, _y);
		haus.quadraticCurveTo(_x + 150, _y + 50, _x + 300, _y);
		haus.lineTo(_x + 250, _y - 550);
		haus.lineTo(_x + 50, _y - 550);
		haus.closePath();
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.moveTo(_x + 85, _y + 21);
		haus.bezierCurveTo(_x + 75, _y - 170, _x + 225, _y - 170, _x + 215, _y + 21);
		haus.quadraticCurveTo(_x + 150, _y + 30, _x + 85, _y + 21);
		crc.strokeStyle = "black";
		crc.fillStyle = "darkgrey";
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.moveTo(_x + 125, _y - 350);
		haus.lineTo(_x + 100, _y - 150);
		haus.lineTo(_x + 200, _y - 150);
		haus.lineTo(_x + 175, _y - 350);
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.arc(_x + 85, _y - 320, 35, 0, 2 * Math.PI);
		crc.strokeStyle = "Black";
		crc.lineWidth = 2;
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.arc(_x + 215, _y - 320, 35, 0, 2 * Math.PI);
		crc.stroke(haus);
		crc.fill(haus);

		haus = new Path2D;
		haus.moveTo(_x + 50, _y - 350);
		haus.lineTo(_x + 50, _y - 390);
		haus.lineTo(_x + 250, _y - 390);
		haus.lineTo(_x + 250, _y - 350);
		haus.closePath();
		crc.strokeStyle = "Black";
		crc.lineWidth = 2;
		crc.stroke(haus);
		crc.fill(haus);

	}

	/*
	function drawGary(_x: number, _y: number): void {
		
	}
	*/

	function drawBubbles(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc(_x, _y, 3 + Math.random() * 5, 0, 2 * Math.PI);
		crc.lineWidth = 1;
		crc.fillStyle = "lightblue";
		crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
		crc.fill(bubble);
		crc.stroke(bubble);
	}

	function drawBubble(_event: MouseEvent): void {
		console.log("Draw Bubble");
		let x: number = _event.x - 9;
		let y: number = _event.y - 9;
		let bubble: Path2D = new Path2D();
		bubble.arc(x, y, 3 + Math.random() * 7, 0, 2 * Math.PI);
		crc.fillStyle = "lightblue";
		crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
		crc.fill(bubble);
		crc.stroke(bubble);
	}

}