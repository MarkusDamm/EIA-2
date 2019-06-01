var A10;
(function (A10) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        let x;
        let y;
        drawBackground(canvas.width, canvas.height);
        for (let i = 0; i < 80; i++) {
            x = Math.random() * canvas.width;
            y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
            drawStones(x, y);
            if (i % 4 == 0) {
                x = Math.random() * canvas.width;
                y = Math.random() * (canvas.height / 6 - 7) + (canvas.height / 6 * 5);
                drawSeaweed(x, y);
                crc.lineWidth = 1;
            }
            if (i % 12 == 0) {
                x = Math.random() * canvas.width;
                y = Math.random() * (canvas.height / 4 * 3);
                drawFishRound(x, y);
                x = Math.random() * canvas.width;
                y = Math.random() * (canvas.height / 4 * 3);
                drawFishLong(x, y);
                x = Math.random() * canvas.width;
                y = Math.random() * (canvas.height / 4 * 3);
                drawFishEdgy(x, y);
            }
        }
        drawPatrickS(350, 630);
        drawTQTentakel(canvas.width - 500, 600);
        /*if (Math.random() * 100 >= 75) {
            x = Math.random() * canvas.width;
            y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
            drawGary(x, y);
        }
        */
        for (let j = 0; j < 100; j++) {
            x = Math.random() * canvas.width;
            y = Math.random() * (canvas.height - 75);
            drawBubbles(x, y);
        }
        canvas.addEventListener("click", drawBubble);
    }
    function drawBackground(_x, _y) {
        let background = new Path2D();
        background.moveTo(0, 0);
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, 0);
        crc.fillStyle = "rgba(173, 216, 230, 0.5)";
        crc.fill(background);
        background = new Path2D();
        background.moveTo(_x, _y);
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y);
        crc.fillStyle = "burlywood";
        crc.fill(background);
    }
    function drawStones(_x, _y) {
        let stone = new Path2D();
        stone.moveTo(_x, _y);
        stone.lineTo(_x + 3, _y + 3);
        stone.lineTo(_x + 6, _y);
        stone.lineTo(_x + 3, _y - 3);
        stone.closePath();
        crc.fillStyle = "gray";
        crc.strokeStyle = "darkgray";
        crc.fill(stone);
        crc.stroke(stone);
    }
    function drawSeaweed(_x, _y) {
        let seaweed = new Path2D();
        seaweed.moveTo(_x, _y);
        seaweed.quadraticCurveTo(_x + 20, _y - 20, _x, _y - 40);
        seaweed.quadraticCurveTo(_x - 15, _y - (20 + 40), _x, _y - 80);
        seaweed.quadraticCurveTo(_x + 10, _y - (20 + 80), _x, _y - 120);
        seaweed.quadraticCurveTo(_x - 6, _y - (15 + 120), _x, _y - 150);
        crc.strokeStyle = "darkgreen";
        crc.lineWidth = 5;
        crc.stroke(seaweed);
    }
    function drawFishRound(_x, _y) {
        let fish = new Path2D();
        let richtung;
        fish.moveTo(_x, _y);
        if (Math.random() * 2 >= 1) {
            richtung = true;
            fish.lineTo(_x - 38, _y - 13);
            fish.lineTo(_x - 38, _y + 13);
        }
        else {
            richtung = false;
            fish.lineTo(_x + 38, _y - 13);
            fish.lineTo(_x + 38, _y + 13);
        }
        crc.stroke(fish);
        crc.fillStyle = "green";
        crc.fill(fish);
        fish = new Path2D();
        fish.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc.stroke(fish);
        crc.fillStyle = "lightgreen";
        crc.fill(fish);
        fish = new Path2D();
        if (richtung == true)
            fish.arc(_x + 12, _y - 7, 2, 0, 2 * Math.PI);
        else
            fish.arc(_x - 12, _y - 7, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(fish);
    }
    function drawFishLong(_x, _y) {
        let fish = new Path2D;
        let richtung;
        fish.moveTo(_x, _y);
        if (Math.random() * 2 >= 1) {
            richtung = true;
            fish.quadraticCurveTo(_x - 33, _y + 30, _x - 90, _y - 13);
            fish.lineTo(_x - 90, _y + 13);
            fish.quadraticCurveTo(_x - 33, _y - 35, _x, _y);
        }
        else {
            richtung = false;
            fish.quadraticCurveTo(_x + 33, _y + 30, _x + 90, _y - 13);
            fish.lineTo(_x + 90, _y + 13);
            fish.quadraticCurveTo(_x + 33, _y - 35, _x, _y);
        }
        crc.fillStyle = "orange";
        crc.strokeStyle = "black";
        crc.stroke(fish);
        crc.fill(fish);
        fish = new Path2D;
        if (richtung == true)
            fish.arc(_x - 15, _y - 5, 2, 0, 2 * Math.PI);
        else
            fish.arc(_x + 15, _y - 5, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(fish);
    }
    function drawFishEdgy(_x, _y) {
        let fish = new Path2D;
        let richtung;
        fish.moveTo(_x, _y);
        if (Math.random() * 2 >= 1) {
            richtung = true;
            fish.lineTo(_x + 40, _y - 60);
            fish.lineTo(_x + 40, _y + 60);
        }
        else {
            richtung = false;
            fish.lineTo(_x - 40, _y - 60);
            fish.lineTo(_x - 40, _y + 60);
        }
        fish.lineTo(_x, _y);
        crc.stroke(fish);
        crc.fillStyle = "violet";
        crc.fill(fish);
        fish = new Path2D;
        if (richtung == true) {
            fish.moveTo(_x + 40, _y - 7);
            fish.lineTo(_x + 55, _y - 18);
            fish.lineTo(_x + 47, _y);
            fish.lineTo(_x + 55, _y + 18);
            fish.lineTo(_x + 40, _y + 7);
        }
        else {
            fish.moveTo(_x - 40, _y - 7);
            fish.lineTo(_x - 55, _y - 18);
            fish.lineTo(_x - 47, _y);
            fish.lineTo(_x - 55, _y + 18);
            fish.lineTo(_x - 40, _y + 7);
        }
        crc.stroke(fish);
        crc.fill(fish);
        fish = new Path2D;
        if (richtung == true)
            fish.arc(_x + 23, _y - 16, 2, 0, 2 * Math.PI);
        else
            fish.arc(_x - 23, _y - 16, 2, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(fish);
    }
    function drawPatrickS(_x, _y) {
        let fels = new Path2D;
        fels.moveTo(_x - 200, _y);
        fels.arc(_x, _y, 200, 0, Math.PI, true);
        fels.quadraticCurveTo(_x, _y + 75, _x + 200, _y);
        let verlauf = crc.createLinearGradient(_x - 100, _y - 150, _x + 100, _y + 50);
        verlauf.addColorStop(0, "rgb(179, 83, 6)");
        verlauf.addColorStop(1, "rgb(114, 54, 5)");
        crc.fillStyle = verlauf;
        crc.fill(fels);
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
        crc.lineWidth = 2;
        crc.strokeStyle = "brown";
        crc.stroke(fels);
        crc.lineWidth = 1;
    }
    function drawTQTentakel(_x, _y) {
    }
    function drawGary(_x, _y) {
    }
    function drawBubbles(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x, _y, 3 + Math.random() * 5, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.strokeStyle = "rgba(38, 38, 255, 0.5)";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
    function drawBubble(_event) {
        console.log("Draw Bubble");
        let x = _event.x - 9;
        let y = _event.y - 9;
        let bubble = new Path2D();
        bubble.arc(x, y, 3 + Math.random() * 7, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.strokeStyle = "rgba(38, 38, 255, 0.726)";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=canvas.js.map