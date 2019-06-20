var A12;
(function (A12) {
    class FishLong extends A12.Fish {
        constructor() {
            super();
            this.x = Math.random() * A12.canvas.width;
            this.y = Math.random() * (A12.canvas.height / 4 * 3);
            this.dy = Math.random() * 2 - 1;
            if (Math.random() * 2 >= 1) {
                this.faceRight = true;
                this.dx = 0.5 + Math.random() * 3;
            }
            else {
                this.faceRight = false;
                this.dx = -0.5 + Math.random() * -3;
            }
            this.draw();
        }
        move() {
            super.move();
            if (this.x > A12.canvas.width + 100 || this.x < -100) {
                if (this.faceRight == true)
                    this.x = 0;
                else
                    this.x = A12.canvas.width;
            }
            if (this.y < -10)
                this.y = A12.canvas.height + 10;
            if (this.y > A12.canvas.height + 10)
                this.y = -10;
        }
        draw() {
            let fish = new Path2D;
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
            A12.crc.fillStyle = "orange";
            A12.crc.strokeStyle = "black";
            A12.crc.stroke(fish);
            A12.crc.fill(fish);
            fish = new Path2D;
            if (this.faceRight == true)
                fish.arc(this.x - 15, this.y - 5, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.fill(fish);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A12.FishLong = FishLong;
})(A12 || (A12 = {}));
//# sourceMappingURL=FishLong.js.map