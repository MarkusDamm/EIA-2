var A12;
(function (A12) {
    class FishRound extends A12.Fish {
        constructor() {
            super();
            this.x = Math.random() * A12.canvas.width;
            this.y = Math.random() * (A12.canvas.height / 4 * 3);
            this.dy = Math.random() * 4 - 2;
            if (Math.random() * 2 >= 1) {
                this.faceRight = true;
                this.dx = Math.random() * 3;
            }
            else {
                this.faceRight = false;
                this.dx = Math.random() * -3;
            }
            this.draw();
        }
        move() {
            super.move();
            if (this.x > A12.canvas.width + 80 || this.x < -80) {
                if (this.faceRight == true)
                    this.x = -60;
                else
                    this.x = A12.canvas.width + 60;
            }
            if (this.y < -50)
                this.y = A12.canvas.height + 50;
            if (this.y > A12.canvas.height + 50)
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
            A12.crc.stroke(fish);
            A12.crc.fillStyle = "green";
            A12.crc.fill(fish);
            fish = new Path2D();
            fish.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            A12.crc.stroke(fish);
            A12.crc.fillStyle = "lightgreen";
            A12.crc.fill(fish);
            fish = new Path2D();
            if (this.faceRight == true)
                fish.arc(this.x + 12, this.y - 7, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x - 12, this.y - 7, 2, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.fill(fish);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A12.FishRound = FishRound;
})(A12 || (A12 = {}));
//# sourceMappingURL=FishRound.js.map