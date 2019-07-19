var A12;
(function (A12) {
    class Food extends A12.MovingObject {
        constructor(_event) {
            super();
            this.x = _event.pageX - 5.5 - Math.random() * 7;
            this.y = _event.pageY - 5.5 - Math.random() * 7;
            this.startX = this.x;
            this.dy = 0.5 + Math.random() * 1.5;
            this.dx = 1 - Math.random() * 2;
            this.r = 2 + Math.random() * 2;
            this.draw();
        }
        move() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.x >= this.startX + 7) {
                this.dx = -this.dx;
            }
            if (this.x <= this.startX - 7) {
                this.dx = -this.dx;
            }
        }
        draw() {
            let food = new Path2D();
            food.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A12.crc.lineWidth = 1;
            A12.crc.fillStyle = "brown";
            A12.crc.strokeStyle = "black";
            A12.crc.stroke(food);
            A12.crc.fill(food);
        }
        update() {
            if (this.y < A12.canvas.height - 25) {
                this.move();
                this.draw();
            }
            else
                this.draw();
        }
    }
    A12.Food = Food;
})(A12 || (A12 = {}));
//# sourceMappingURL=food.js.map