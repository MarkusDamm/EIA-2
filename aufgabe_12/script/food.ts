namespace A12 {
    export class Food extends A12.MovingObject {
        
        r: number;
        startX: number;

        constructor(_event: MouseEvent) {
            super();
            
            this.x = _event.pageX - 5.5 - Math.random() * 7;
            this.y = _event.pageY - 5.5 - Math.random() * 7;
            this.startX = this.x;
            this.dy = 0.5 + Math.random() * 1.5;
            this.dx = 1 - Math.random() * 2;
            this.r = 2 + Math.random() * 2;
            this.draw();

        }

        move(): void {
            this.y += this.dy;
            this.x += this.dx;
            if (this.x >= this.startX + 7) {
                this.dx = -this.dx;
            }
            if (this.x <= this.startX - 7) {
                this.dx = -this.dx;
            }
        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.lineWidth = 1;
            crc.fillStyle = "brown";
            crc.strokeStyle = "black";
            crc.stroke(food);
            crc.fill(food);
        }

        update(): void {
            if (this.y < canvas.height - 25) {
                this.move();
                this.draw();
            }
            else 
                this.draw();
        }

    }
}