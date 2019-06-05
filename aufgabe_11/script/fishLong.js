var A11;
(function (A11) {
    class FishLong {
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
            if (this.x > A11.canvas.width + 100 || this.x < -100) {
                if (this.faceRight == true)
                    this.x = 0;
                else
                    this.x = A11.canvas.width;
            }
            if (this.y < -10)
                this.y = A11.canvas.height + 10;
            if (this.y > A11.canvas.height + 10)
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
            A11.crc.fillStyle = "orange";
            A11.crc.strokeStyle = "black";
            A11.crc.stroke(fish);
            A11.crc.fill(fish);
            fish = new Path2D;
            if (this.faceRight == true)
                fish.arc(this.x - 15, this.y - 5, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.fill(fish);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A11.FishLong = FishLong;
})(A11 || (A11 = {}));
//# sourceMappingURL=fishLong.js.map