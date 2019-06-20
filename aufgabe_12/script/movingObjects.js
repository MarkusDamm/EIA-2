var A12;
(function (A12) {
    class MovingObjects extends A12.Objects {
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
    A12.MovingObjects = MovingObjects;
})(A12 || (A12 = {}));
//# sourceMappingURL=MovingObjects.js.map