var A11;
(function (A11) {
    class Bubbles {
        constructor() {
            this.x = Math.random() * A11.canvas.width;
            this.y = Math.random() * (A11.canvas.height - 75);
            this.dy = -0.5 + Math.random() * -2.5;
            this.r = 3 + Math.random() * 5;
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = A11.canvas.height + 9;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A11.crc.lineWidth = 1;
            A11.crc.fillStyle = "lightblue";
            A11.crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
            A11.crc.fill(bubble);
            A11.crc.stroke(bubble);
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A11.Bubbles = Bubbles;
})(A11 || (A11 = {}));
//# sourceMappingURL=bubbles.js.map