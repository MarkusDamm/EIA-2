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
			for (let j: number = 0; j < 2; j++) {
				x = Math.random() * canvas.width;
				y = Math.random() * (canvas.height - 45);
				drawBubbles(x, y);
				drawBubbles(x, y);
			}
			x = Math.random() * canvas.width;
			y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
			drawStones(x, y);
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

	function drawBubbles(_x: number, _y: number): void {
		let bubble: Path2D = new Path2D();
		//bubble.moveTo(_x, _y);
		bubble.arc(_x, _y, 3, 0, 2 * Math.PI);
		crc.fillStyle = "lightblue";
		crc.strokeStyle = "rgba(38, 38, 255, 0.75)";
		crc.fill(bubble);
		crc.stroke(bubble);
	}

	function drawBubble(_event: MouseEvent): void {
		console.log("Draw Bubble");
		let x: number = _event.x - 8;
		let y: number = _event.y - 8;
		let bubble: Path2D = new Path2D();
		bubble.arc(x, y, 3, 0, 2 * Math.PI);
		crc.fillStyle = "lightblue";
		crc.strokeStyle = "rgba(38, 38, 255, 0.726)";
		crc.fill(bubble);
		crc.stroke(bubble);
	}
}