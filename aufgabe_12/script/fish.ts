namespace A12 {
    export class Fish extends A12.MovingObjects {
        faceRight: boolean;
               
        constructor() {
           super();
        }

        draw(): void {
            //;
        }

        move(): void {
            //;
            this.x += this.dx;
            this.y += this.dy;
        }

        update(): void {
            this.move();
            this.draw();
        }
    }
}