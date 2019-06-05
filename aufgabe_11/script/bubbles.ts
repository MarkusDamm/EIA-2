namespace A11 {
    export class Bubbles {
        x: number;
        y: number;
        dy: number;
        r: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * (canvas.height - 75);
            this.dy = -0.5 + Math.random() * -2.5;
            this.r = 3 + Math.random() * 5;
        }

        move(): void {
            this.y += this.dy;
            if (this.y < 0)
                this.y = canvas.height + 9;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.lineWidth = 1;
            crc.fillStyle = "lightblue";
            crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
            crc.fill(bubble);
            crc.stroke(bubble);
        }

        update(): void {
            this.move();
            this.draw();
        }

    }
}