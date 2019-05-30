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
            for (let j = 0; j < 2; j++) {
                x = Math.random() * canvas.width;
                y = Math.random() * (canvas.height - 45);
                drawBubbles(x, y);
                drawBubbles(x, y);
            }
            x = Math.random() * canvas.width;
            y = Math.random() * (canvas.height / 6) + (canvas.height / 6 * 5);
            drawStones(x, y);
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
    function drawBubbles(_x, _y) {
        let bubble = new Path2D();
        //bubble.moveTo(_x, _y);
        bubble.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.strokeStyle = "rgba(38, 38, 255, 0.75)";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
    function drawBubble(_event) {
        console.log("Draw Bubble");
        let x = _event.x - 8;
        let y = _event.y - 8;
        let bubble = new Path2D();
        bubble.arc(x, y, 3, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.strokeStyle = "rgba(38, 38, 255, 0.726)";
        crc.fill(bubble);
        crc.stroke(bubble);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=canvas.js.map