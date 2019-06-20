namespace A12 {
    export class MovingObjects extends A12.Objects {
        dx: number;
        dy: number;
               
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