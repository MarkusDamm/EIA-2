namespace A11 {
    export class FishLong {
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

            if (this.x > canvas.width + 100 || this.x < -100) {
                if (this.faceRight == true)
                    this.x = 0;

                else
                    this.x = canvas.width;
            }
            if (this.y < -10)
                this.y = canvas.height + 10;
            if (this.y > canvas.height + 10)
                this.y = -10;

        }

        draw(): void {
            let fish: Path2D = new Path2D;
            fish.moveTo(this.x, this.y);
            if (this.faceRight == true) {
                fish.quadraticCurveTo(this.x - 33, this.y + 30, this.x - 90, this.y - 13);
                fish.lineTo(this.x - 90, this.y + 13);
                fish.quadraticCurveTo(this.x - 33, this.y - 35, this.x, this.y);
            }
            else {
                fish.quadraticCurveTo(this.x + 33, this.y + 30, this.x + 90, this.y - 13);
                fish.lineTo(this.x + 90, this.y + 13);
                fish.quadraticCurveTo(this.x + 33, this.y - 35, this.x, this.y);
            }
            crc.fillStyle = "orange";
            crc.strokeStyle = "black";
            crc.stroke(fish);
            crc.fill(fish);

            fish = new Path2D;
            if (this.faceRight == true)
                fish.arc(this.x - 15, this.y - 5, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fish);
        }

        update(): void {
            this.move();
            this.draw();
        }


    }
}