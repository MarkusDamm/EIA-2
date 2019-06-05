var A11;
(function (A11) {
    class FishRound {
        constructor() {
            this.x = Math.random() * A11.canvas.width;
            this.y = Math.random() * (A11.canvas.height / 4 * 3);
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
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > A11.canvas.width + 80 || this.x < -80) {
                if (this.faceRight == true)
                    this.x = -60;
                else
                    this.x = A11.canvas.width + 60;
            }
            if (this.y < -50)
                this.y = A11.canvas.height + 50;
            if (this.y > A11.canvas.height + 50)
                this.y = -50;
        }
        draw() {
            let fish = new Path2D();
            fish.moveTo(this.x, this.y);
            if (this.faceRight == true) {
                fish.lineTo(this.x - 38, this.y - 13);
                fish.lineTo(this.x - 38, this.y + 13);
            }
            else {
                fish.lineTo(this.x + 38, this.y - 13);
                fish.lineTo(this.x + 38, this.y + 13);
            }
            A11.crc.stroke(fish);
            A11.crc.fillStyle = "green";
            A11.crc.fill(fish);
            fish = new Path2D();
            fish.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            A11.crc.stroke(fish);
            A11.crc.fillStyle = "lightgreen";
            A11.crc.fill(fish);
            fish = new Path2D();
            if (this.faceRight == true)
                fish.arc(this.x + 12, this.y - 7, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x - 12, this.y - 7, 2, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.fill(fish);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A11.FishRound = FishRound;
})(A11 || (A11 = {}));
//# sourceMappingURL=fishRound.js.map