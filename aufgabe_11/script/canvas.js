var A11;
(function (A11) {
    document.addEventListener("DOMContentLoaded", init);
    let fps = 60;
    let imageData;
    let roundArray = [];
    let longArray = [];
    let edgyArray = [];
    let bubblesArray = [];
    function init() {
        A11.canvas = document.getElementsByTagName("canvas")[0];
        A11.crc = A11.canvas.getContext("2d");
        let x;
        let y;
        drawBackground(A11.canvas.width, A11.canvas.height);
        for (let i = 0; i < 80; i++) {
            x = Math.random() * A11.canvas.width;
            y = Math.random() * (A11.canvas.height / 6) + (A11.canvas.height / 6 * 5);
            drawStones(x, y);
            if (i % 4 == 0) {
                x = Math.random() * A11.canvas.width;
                y = Math.random() * (A11.canvas.height / 6 - 7) + (A11.canvas.height / 6 * 5);
                drawSeaweed(x, y);
                A11.crc.lineWidth = 1;
            }
        }
        drawPatrickS(350, 630);
        drawTQTentakel(A11.canvas.width - 430, 620);
        imageData = A11.crc.getImageData(0, 0, A11.canvas.width, A11.canvas.height);
        A11.crc.lineWidth = 1;
        for (let i = 0; i < 100; i++) {
            if (i % 20 == 0) {
                let roundFish = new A11.FishRound;
                roundFish.draw();
                roundArray.push(roundFish);
                let longFish = new A11.FishLong;
                longFish.draw();
                longArray.push(longFish);
                let edgyFish = new A11.FishEdgy;
                edgyFish.draw();
                edgyArray.push(edgyFish);
            }
            let bubbles = new A11.Bubbles;
            bubbles.draw();
            bubblesArray.push(bubbles);
        }
        /*if (Math.random() * 100 >= 75) {
            x = Math.random() * canvas.width;
            y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
            drawGary(x, y);
        }*/
        A11.canvas.addEventListener("click", drawBubble);
        update();
    }
    function drawBackground(_x, _y) {
        let background = new Path2D();
        background.moveTo(0, 0);
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, 0);
        A11.crc.fillStyle = "rgba(173, 216, 230, 0.5)";
        A11.crc.fill(background);
        background = new Path2D();
        background.moveTo(_x, _y);
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y);
        A11.crc.fillStyle = "burlywood";
        A11.crc.fill(background);
    }
    function drawStones(_x, _y) {
        let stone = new Path2D();
        stone.moveTo(_x, _y);
        stone.lineTo(_x + 3, _y + 3);
        stone.lineTo(_x + 6, _y);
        stone.lineTo(_x + 3, _y - 3);
        stone.closePath();
        A11.crc.fillStyle = "gray";
        A11.crc.strokeStyle = "darkgray";
        A11.crc.fill(stone);
        A11.crc.stroke(stone);
    }
    function drawSeaweed(_x, _y) {
        let seaweed = new Path2D();
        seaweed.moveTo(_x, _y);
        seaweed.quadraticCurveTo(_x + 20, _y - 20, _x, _y - 40);
        seaweed.quadraticCurveTo(_x - 15, _y - (20 + 40), _x, _y - 80);
        seaweed.quadraticCurveTo(_x + 10, _y - (20 + 80), _x, _y - 120);
        seaweed.quadraticCurveTo(_x - 6, _y - (15 + 120), _x, _y - 150);
        A11.crc.strokeStyle = "darkgreen";
        A11.crc.lineWidth = 5;
        A11.crc.stroke(seaweed);
    }
    function drawPatrickS(_x, _y) {
        let fels = new Path2D;
        fels.moveTo(_x - 200, _y);
        fels.arc(_x, _y, 200, 0, Math.PI, true);
        fels.quadraticCurveTo(_x, _y + 75, _x + 200, _y);
        let verlauf = A11.crc.createLinearGradient(_x - 100, _y - 150, _x + 100, _y + 50);
        verlauf.addColorStop(0, "rgb(179, 83, 6)");
        verlauf.addColorStop(1, "rgb(114, 54, 5)");
        A11.crc.fillStyle = verlauf;
        A11.crc.fill(fels);
        fels = new Path2D;
        fels.moveTo(_x, _y - 190);
        fels.lineTo(_x + 10, _y - 215);
        fels.lineTo(_x - 30, _y - 205);
        fels.lineTo(_x - 20, _y - 215);
        fels.moveTo(_x - 30, _y - 205);
        fels.lineTo(_x - 17, _y - 202);
        fels.moveTo(_x + 10, _y - 215);
        fels.lineTo(_x + 40, _y - 223);
        fels.lineTo(_x + 53, _y - 220);
        fels.moveTo(_x + 40, _y - 223);
        fels.lineTo(_x + 50, _y - 232);
        fels.moveTo(_x + 30, _y - 220);
        fels.lineTo(_x + 43, _y - 217);
        fels.moveTo(_x + 30, _y - 220);
        fels.lineTo(_x + 40, _y - 230);
        A11.crc.lineWidth = 2;
        A11.crc.strokeStyle = "brown";
        A11.crc.stroke(fels);
        A11.crc.lineWidth = 1;
    }
    function drawTQTentakel(_x, _y) {
        let haus = new Path2D;
        haus.moveTo(_x + 150, _y - 400);
        haus.lineTo(_x - 25, _y - 330);
        haus.lineTo(_x - 25, _y - 160);
        haus.lineTo(_x + 150, _y - 120);
        haus.lineTo(_x + 325, _y - 160);
        haus.lineTo(_x + 325, _y - 330);
        haus.closePath();
        A11.crc.fillStyle = "lightgrey";
        A11.crc.strokeStyle = "grey";
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x, _y);
        haus.quadraticCurveTo(_x + 150, _y + 50, _x + 300, _y);
        haus.lineTo(_x + 250, _y - 550);
        haus.lineTo(_x + 50, _y - 550);
        haus.closePath();
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 85, _y + 21);
        haus.bezierCurveTo(_x + 75, _y - 170, _x + 225, _y - 170, _x + 215, _y + 21);
        haus.quadraticCurveTo(_x + 150, _y + 30, _x + 85, _y + 21);
        A11.crc.strokeStyle = "black";
        A11.crc.fillStyle = "darkgrey";
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 125, _y - 350);
        haus.lineTo(_x + 100, _y - 150);
        haus.lineTo(_x + 200, _y - 150);
        haus.lineTo(_x + 175, _y - 350);
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.arc(_x + 85, _y - 320, 35, 0, 2 * Math.PI);
        A11.crc.strokeStyle = "Black";
        A11.crc.lineWidth = 2;
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.arc(_x + 215, _y - 320, 35, 0, 2 * Math.PI);
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 50, _y - 350);
        haus.lineTo(_x + 50, _y - 390);
        haus.lineTo(_x + 250, _y - 390);
        haus.lineTo(_x + 250, _y - 350);
        haus.closePath();
        A11.crc.strokeStyle = "Black";
        A11.crc.lineWidth = 2;
        A11.crc.stroke(haus);
        A11.crc.fill(haus);
    }
    /*
    function drawGary(_x: number, _y: number): void {	}
    

    function drawBubbles(_x: number, _y: number): void {
        let bubble: Path2D = new Path2D();
        bubble.arc(_x, _y, 3 + Math.random() * 5, 0, 2 * Math.PI);
        crc.lineWidth = 1;
        crc.fillStyle = "lightblue";
        crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
*/
    function drawBubble(_event) {
        let bubbles = new A11.Bubbles;
        bubbles.draw();
        bubblesArray.push(bubbles);
        /*	Gerade nur zufällige Blasen
                console.log("Draw Bubble");
                let x: number = _event.x - 9;
                let y: number = _event.y - 9;
                let bubble: Path2D = new Path2D();
                bubble.arc(x, y, 3 + Math.random() * 7, 0, 2 * Math.PI);
                crc.fillStyle = "lightblue";
                crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
                crc.fill(bubble);
                crc.stroke(bubble);
        */
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A11.crc.clearRect(0, 0, A11.canvas.width, A11.canvas.height);
        A11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < roundArray.length; i++) {
            roundArray[i].update();
            longArray[i].update();
            edgyArray[i].update();
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].update();
        }
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=canvas.js.map