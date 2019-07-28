namespace A12 {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let fps: number = 60;
	let imageData: ImageData;
	let allArray: MovingObject[] = [];
	let bubblesArray: Bubble[] = [];
	let bubbleOn: boolean = true;

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

			if (i % 2 == 0) {
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height / 6 - 7) + (canvas.height / 6 * 5);
				drawSeaweed(x, y);
				crc.lineWidth = 1;
			}
		}
		drawPatrickS(350, canvas.height - canvas.height / 9.5);
		drawTQTentakel(canvas.width - 430, canvas.height - canvas.height / 9);
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		crc.lineWidth = 1;

		for (let i: number = 0; i < 50; i++) {
			if (i % 8 == 0) {
				let roundFish: FishRound = new A12.FishRound();
				//roundFish.draw();
				

				let longFish: FishLong = new A12.FishLong();
				//longFish.draw();
				

				let edgyFish: FishEdgy = new A12.FishEdgy();
				//edgyFish.draw();
				
				allArray.push(roundFish, longFish, edgyFish);

			}
			
			let bubbles: Bubble = new A12.Bubble();
			//bubbles.draw();
			bubblesArray.push(bubbles);
			allArray.push(bubbles);
		
		}

		canvas.addEventListener("mousemove", drawBubble);
		canvas.addEventListener("click", drawFishfood);
		update();
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
		stone.moveTo(_x, _y);
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
		seaweed.quadraticCurveTo(_x + 20, _y - 20, _x, _y - 40);
		seaweed.quadraticCurveTo(_x - 15, _y - (20 + 40), _x, _y - 80);
		seaweed.quadraticCurveTo(_x + 10, _y - (20 + 80), _x, _y - 120);
		seaweed.quadraticCurveTo(_x - 6, _y - (15 + 120), _x, _y - 150);
		crc.strokeStyle = "darkgreen";
		crc.lineWidth = 5;
		crc.stroke(seaweed);
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

		fels.moveTo(_x + 10, _y - 215);
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

	function drawBubble(_event: MouseEvent): void {
		if (bubbleOn == true) {
			let bubbles: Bubble = new A12.Bubble(_event);
			//bubbles.draw();
			bubblesArray.push(bubbles);
			allArray.push(bubbles);
			bubbleOn = false;
			window.setTimeout(activateBubble, 500);
		}
	}

	function activateBubble(): void {
		bubbleOn = true;
	}

	function drawFishfood(_event: MouseEvent): void {
		for (let i: number = 0; i < 3 + Math.random() * 10; i++) {
			let food: Food = new A12.Food(_event);
			//food.draw();
			bubblesArray.push(food);
			allArray.push(food);
		}
		console.log(allArray);
		
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < allArray.length; i++) {
			allArray[i].update();
			
		}
	/*
		for (let i: number = 0; i < roundArray.length; i++) {
			roundArray[i].update();
			longArray[i].update();
			edgyArray[i].update();

		}
		for (let i: number = 0; i < bubblesArray.length; i++) {
			bubblesArray[i].update();
		}
	*/
	}
}