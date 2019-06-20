namespace A12 {
    export class FishEdgy extends A12.Fish {
        
        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * (canvas.height / 4 * 3);
            this.dy = Math.random() * 1 - 0.5;
            if (Math.random() * 2 > 1) {
                this.faceRight = true;
                this.dx = 1 + Math.random() * 4;
            }
            else {
                this.faceRight = false;
                this.dx =  -1 + Math.random() * -4;
            }
            this.draw();
        }

        move(): void {
            super.move();

            if (this.x > canvas.width + 60 || this.x < -60) {
                if (this.faceRight == true)
                    this.x = 0;

                else
                    this.x = canvas.width;
            }
            if (this.y < -65)
                this.y = canvas.height + 65;
            if (this.y > canvas.height + 65)
                this.y = -65;
        }

        draw(): void {
            let fish: Path2D = new Path2D;
            fish.moveTo(this.x, this.y);
            if (this.faceRight == false) {
                fish.lineTo(this.x + 40, this.y - 60);
                fish.lineTo(this.x + 40, this.y + 60);
            }
            else {
                fish.lineTo(this.x - 40, this.y - 60);
                fish.lineTo(this.x - 40, this.y + 60);
            }
            fish.lineTo(this.x, this.y);
            crc.stroke(fish);
            crc.fillStyle = "violet";
            crc.fill(fish);

            fish = new Path2D;
            if (this.faceRight == false) {
                fish.moveTo(this.x + 40, this.y - 7);
                fish.lineTo(this.x + 55, this.y - 18);
                fish.lineTo(this.x + 47, this.y);
                fish.lineTo(this.x + 55, this.y + 18);
                fish.lineTo(this.x + 40, this.y + 7);
            }
            else {
                fish.moveTo(this.x - 40, this.y - 7);
                fish.lineTo(this.x - 55, this.y - 18);
                fish.lineTo(this.x - 47, this.y);
                fish.lineTo(this.x - 55, this.y + 18);
                fish.lineTo(this.x - 40, this.y + 7);
            }
            crc.stroke(fish);
            crc.fill(fish);

            fish = new Path2D;
            if (this.faceRight == false)
                fish.arc(this.x + 23, this.y - 16, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x - 23, this.y - 16, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(fish);
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}