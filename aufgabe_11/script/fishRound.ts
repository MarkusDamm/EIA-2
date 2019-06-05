namespace A11 {
    export class FishRound {
        x: number;
        y: number;
        dx: number;
        dy: number;
        faceRight: boolean;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * (canvas.height / 4 * 3);
            this.dy = Math.random() * 4 - 2;
            if (Math.random() * 2 >= 1) {
                this.faceRight = true;
                this.dx = 1 + Math.random() * 4;
            }
            else {
                this.faceRight = false;
                this.dx = -1 + Math.random() * -4;
            }
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > canvas.width + 80 || this.x < -80) {
                if (this.faceRight == true)
                    this.x = -60;

                else
                    this.x = canvas.width + 60;
            }
            if (this.y < -50)
                this.y = canvas.height + 50;
            if (this.y > canvas.height + 50)
                this.y = -50;
        }

        draw(): void {
            let fish: Path2D = new Path2D();

            fish.moveTo(this.x, this.y);
            if (this.faceRight == true) {
                fish.lineTo(this.x - 38, this.y - 13);
                fish.lineTo(this.x - 38, this.y + 13);
            }
            else {
                fish.lineTo(this.x + 38, this.y - 13);
                fish.lineTo(this.x + 38, this.y + 13);
            }
            crc.stroke(fish);
            crc.fillStyle = "green";
            crc.fill(fish);

            fish = new Path2D();
            fish.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            crc.stroke(fish);
            crc.fillStyle = "lightgreen";
            crc.fill(fish);

            fish = new Path2D();
            if (this.faceRight == true)
                fish.arc(this.x + 12, this.y - 7, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x - 12, this.y - 7, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fish);
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}