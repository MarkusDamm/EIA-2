var A12;
(function (A12) {
    class Bubble extends A12.MovingObject {
        constructor(_event) {
            super();
            if (_event) {
                this.x = _event.x - 9;
                this.y = _event.y - 9;
            }
            else {
                this.x = Math.random() * A12.canvas.width;
                this.y = Math.random() * (A12.canvas.height - 75);
            }
            this.dy = -0.5 + Math.random() * -2.5;
            this.r = 3 + Math.random() * 5;
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = A12.canvas.height + 9;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A12.crc.lineWidth = 1;
            A12.crc.fillStyle = "lightblue";
            A12.crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
            A12.crc.fill(bubble);
            A12.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A12.Bubble = Bubble;
})(A12 || (A12 = {}));
//# sourceMappingURL=bubble.js.map