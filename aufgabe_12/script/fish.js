var A12;
(function (A12) {
    class Fish extends A12.MovingObjects {
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
    A12.Fish = Fish;
})(A12 || (A12 = {}));
//# sourceMappingURL=Fish.js.map