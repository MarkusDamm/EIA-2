var A12;
(function (A12) {
    class MovingObject extends A12.Object {
        constructor() {
            super();
        }
        draw() {
            //;
        }
        move() {
            //;
            this.x += this.dx;
            this.y += this.dy;
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A12.MovingObject = MovingObject;
})(A12 || (A12 = {}));
//# sourceMappingURL=movingObject.js.map