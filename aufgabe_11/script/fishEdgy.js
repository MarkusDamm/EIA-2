var A11;
(function (A11) {
    class FishEdgy {
        constructor() {
            this.x = Math.random() * A11.canvas.width;
            this.y = Math.random() * (A11.canvas.height / 4 * 3);
            this.dy = Math.random() * 1 - 0.5;
            if (Math.random() * 2 > 1) {
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
            if (this.x > A11.canvas.width + 60 || this.x < -60) {
                if (this.faceRight == true)
                    this.x = 0;
                else
                    this.x = A11.canvas.width;
            }
            if (this.y < -65)
                this.y = A11.canvas.height + 65;
            if (this.y > A11.canvas.height + 65)
                this.y = -65;
        }
        draw() {
            let fish = new Path2D;
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
            A11.crc.stroke(fish);
            A11.crc.fillStyle = "violet";
            A11.crc.fill(fish);
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
            A11.crc.stroke(fish);
            A11.crc.fill(fish);
            fish = new Path2D;
            if (this.faceRight == false)
                fish.arc(this.x + 23, this.y - 16, 2, 0, 2 * Math.PI);
            else
                fish.arc(this.x - 23, this.y - 16, 2, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.fill(fish);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A11.FishEdgy = FishEdgy;
})(A11 || (A11 = {}));
//# sourceMappingURL=FishEdgy.js.map