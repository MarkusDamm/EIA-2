var A12;
(function (A12) {
    document.addEventListener("DOMContentLoaded", init);
    let fps = 60;
    let imageData;
    let allArray = [];
    let roundArray = [];
    let longArray = [];
    let edgyArray = [];
    let bubblesArray = [];
    let bubbleOn = true;
    function init() {
        A12.canvas = document.getElementsByTagName("canvas")[0];
        A12.crc = A12.canvas.getContext("2d");
        let x;
        let y;
        drawBackground(A12.canvas.width, A12.canvas.height);
        for (let i = 0; i < 80; i++) {
            x = Math.random() * A12.canvas.width;
            y = Math.random() * (A12.canvas.height / 6) + (A12.canvas.height / 6 * 5);
            drawStones(x, y);
            if (i % 2 == 0) {
                x = Math.random() * A12.canvas.width;
                y = Math.random() * (A12.canvas.height / 6 - 7) + (A12.canvas.height / 6 * 5);
                drawSeaweed(x, y);
                A12.crc.lineWidth = 1;
            }
        }
        drawPatrickS(350, A12.canvas.height - A12.canvas.height / 9.5);
        drawTQTentakel(A12.canvas.width - 430, A12.canvas.height - A12.canvas.height / 9);
        imageData = A12.crc.getImageData(0, 0, A12.canvas.width, A12.canvas.height);
        A12.crc.lineWidth = 1;
        for (let i = 0; i < 50; i++) {
            if (i % 8 == 0) {
                let roundFish = new A12.FishRound();
                //roundFish.draw();
                roundArray.push(roundFish);
                let longFish = new A12.FishLong();
                //longFish.draw();
                longArray.push(longFish);
                let edgyFish = new A12.FishEdgy();
                //edgyFish.draw();
                edgyArray.push(edgyFish);
                allArray.push(roundFish, longFish, edgyFish);
            }
            let bubbles = new A12.Bubble();
            //bubbles.draw();
            bubblesArray.push(bubbles);
            allArray.push(bubbles);
        }
        A12.canvas.addEventListener("mousemove", drawBubble);
        A12.canvas.addEventListener("click", drawFishfood);
        update();
    }
    function drawBackground(_x, _y) {
        let background = new Path2D();
        background.moveTo(0, 0);
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(_x, 0);
        A12.crc.fillStyle = "rgba(173, 216, 230, 0.5)";
        A12.crc.fill(background);
        background = new Path2D();
        background.moveTo(_x, _y);
        background.lineTo(_x, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y / 6 + (_y / 6 * 4));
        background.lineTo(0, _y);
        A12.crc.fillStyle = "burlywood";
        A12.crc.fill(background);
    }
    function drawStones(_x, _y) {
        let stone = new Path2D();
        stone.moveTo(_x, _y);
        stone.lineTo(_x + 3, _y + 3);
        stone.lineTo(_x + 6, _y);
        stone.lineTo(_x + 3, _y - 3);
        stone.closePath();
        A12.crc.fillStyle = "gray";
        A12.crc.strokeStyle = "darkgray";
        A12.crc.fill(stone);
        A12.crc.stroke(stone);
    }
    function drawSeaweed(_x, _y) {
        let seaweed = new Path2D();
        seaweed.moveTo(_x, _y);
        seaweed.quadraticCurveTo(_x + 20, _y - 20, _x, _y - 40);
        seaweed.quadraticCurveTo(_x - 15, _y - (20 + 40), _x, _y - 80);
        seaweed.quadraticCurveTo(_x + 10, _y - (20 + 80), _x, _y - 120);
        seaweed.quadraticCurveTo(_x - 6, _y - (15 + 120), _x, _y - 150);
        A12.crc.strokeStyle = "darkgreen";
        A12.crc.lineWidth = 5;
        A12.crc.stroke(seaweed);
    }
    function drawPatrickS(_x, _y) {
        let fels = new Path2D;
        fels.moveTo(_x - 200, _y);
        fels.arc(_x, _y, 200, 0, Math.PI, true);
        fels.quadraticCurveTo(_x, _y + 75, _x + 200, _y);
        let verlauf = A12.crc.createLinearGradient(_x - 100, _y - 150, _x + 100, _y + 50);
        verlauf.addColorStop(0, "rgb(179, 83, 6)");
        verlauf.addColorStop(1, "rgb(114, 54, 5)");
        A12.crc.fillStyle = verlauf;
        A12.crc.fill(fels);
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
        A12.crc.lineWidth = 2;
        A12.crc.strokeStyle = "brown";
        A12.crc.stroke(fels);
        A12.crc.lineWidth = 1;
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
        A12.crc.fillStyle = "lightgrey";
        A12.crc.strokeStyle = "grey";
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x, _y);
        haus.quadraticCurveTo(_x + 150, _y + 50, _x + 300, _y);
        haus.lineTo(_x + 250, _y - 550);
        haus.lineTo(_x + 50, _y - 550);
        haus.closePath();
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 85, _y + 21);
        haus.bezierCurveTo(_x + 75, _y - 170, _x + 225, _y - 170, _x + 215, _y + 21);
        haus.quadraticCurveTo(_x + 150, _y + 30, _x + 85, _y + 21);
        A12.crc.strokeStyle = "black";
        A12.crc.fillStyle = "darkgrey";
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 125, _y - 350);
        haus.lineTo(_x + 100, _y - 150);
        haus.lineTo(_x + 200, _y - 150);
        haus.lineTo(_x + 175, _y - 350);
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.arc(_x + 85, _y - 320, 35, 0, 2 * Math.PI);
        A12.crc.strokeStyle = "Black";
        A12.crc.lineWidth = 2;
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.arc(_x + 215, _y - 320, 35, 0, 2 * Math.PI);
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
        haus = new Path2D;
        haus.moveTo(_x + 50, _y - 350);
        haus.lineTo(_x + 50, _y - 390);
        haus.lineTo(_x + 250, _y - 390);
        haus.lineTo(_x + 250, _y - 350);
        haus.closePath();
        A12.crc.strokeStyle = "Black";
        A12.crc.lineWidth = 2;
        A12.crc.stroke(haus);
        A12.crc.fill(haus);
    }
    function drawBubble(_event) {
        if (bubbleOn == true) {
            let bubbles = new A12.Bubble(_event);
            //bubbles.draw();
            bubblesArray.push(bubbles);
            allArray.push(bubbles);
            bubbleOn = false;
            window.setTimeout(activateBubble, 1000);
        }
    }
    function activateBubble() {
        bubbleOn = true;
    }
    function drawFishfood(_event) {
        for (let i = 0; i < 3 + Math.random() * 10; i++) {
            let food = new A12.Food(_event);
            //food.draw();
            bubblesArray.push(food);
            allArray.push(food);
        }
        console.log(allArray);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A12.crc.clearRect(0, 0, A12.canvas.width, A12.canvas.height);
        A12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < allArray.length; i++) {
            allArray[i].update();
        }
        /*
            for (let i: number = 0; i < roundArray.length; i++) {
                roundArray[i].update();
                longArray[i].update();
                edgyArray[i].update();
    
            }
            for (let i: number = 0; i < bubblesArray.length; i++) {
                bubblesArray[i].update();
            }
        */
    }
})(A12 || (A12 = {}));
//# sourceMappingURL=canvas.js.map