"use strict";
var InBetween;
(function (InBetween) {
    window.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    window.addEventListener("load", handleLoad);
    window.addEventListener("click", handleLeftclick);
    window.addEventListener("contextmenu", handleRightclick);
    window.addEventListener("mousedown", handleMousedown);
    window.addEventListener("mousemove", handleMousemoveHover);
    let image;
    let fps = 15;
    InBetween.levelCompleted = false;
    InBetween.rectangleArray = [];
    InBetween.squareArray = [];
    InBetween.triangleArray = [];
    InBetween.rectanglePresent = false;
    InBetween.squarePresent = false;
    InBetween.trianglePresent = false;
    InBetween.rectangleDragged = false;
    InBetween.squareDragged = false;
    InBetween.triangleDragged = false;
    InBetween.button1hover = false;
    InBetween.button2hover = false;
    InBetween.button3hover = false;
    InBetween.startbuttonhover = false;
    InBetween.rectanglehover = false;
    InBetween.trianglehover = false;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        InBetween.crc2 = canvas.getContext("2d");
        window.setInterval(update, fps);
        drawBackground();
        drawLamps();
        drawInterface();
        drawRectanglebutton();
        drawSquarebutton();
        drawTrianglebutton();
        drawProgressbar();
        //drawStartbutton();
        drawTarget();
        image = InBetween.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    /*function myFunction() : void {
        let x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }*/
    function update() {
        InBetween.crc2.clearRect(0, 0, InBetween.crc2.canvas.width, InBetween.crc2.canvas.height);
        InBetween.crc2.putImageData(image, 0, 0);
        let outOfBounds = InBetween.throwLightball && InBetween.throwLightball.position.y < 0;
        //console.log(rectangleDragged);
        if (InBetween.throwLightball && !outOfBounds && InBetween.levelCompleted == false) {
            let totalElements = [...InBetween.rectangleArray, ...InBetween.squareArray, ...InBetween.triangleArray];
            for (let element of totalElements) {
            }
            InBetween.throwLightball.draw();
            InBetween.throwLightball.move(1);
        }
        if (InBetween.rectangleArray) {
            for (let i = 0; i < InBetween.rectangleArray.length; i++) {
                InBetween.rectangleArray[i].draw();
            }
        }
        if (InBetween.squareArray) {
            for (let i = 0; i < InBetween.squareArray.length; i++) {
                InBetween.squareArray[i].draw();
            }
        }
        if (InBetween.triangleArray) {
            for (let i = 0; i < InBetween.triangleArray.length; i++) {
                InBetween.triangleArray[i].draw();
            }
        }
        /*if (glow < 15) {
            glow += 0.2;
        }
        if (glow > 14 && glow > 0) {
            glow -= 0.2;
        } */
        if (InBetween.levelCompleted == true) {
            drawBackground();
            drawLamps();
            drawInterface();
            //drawStartbutton();
            drawRectanglebutton();
            drawSquarebutton();
            drawTrianglebutton();
            //drawProgressbar();
            drawTarget();
        }
        drawInterface();
        drawProgressbar();
        drawStartbutton();
        drawRectanglebutton();
        drawSquarebutton();
        drawTrianglebutton();
        drawTarget();
        if (InBetween.rectangleArray) {
            for (let i = 0; i < InBetween.rectangleArray.length; i++) {
                InBetween.rectangleArray[i].draw();
            }
        }
        if (InBetween.squareArray) {
            for (let i = 0; i < InBetween.squareArray.length; i++) {
                InBetween.squareArray[i].draw();
            }
        }
        if (InBetween.triangleArray) {
            for (let i = 0; i < InBetween.triangleArray.length; i++) {
                InBetween.triangleArray[i].draw();
            }
        }
        if (InBetween.rectangleDragged == true) {
            InBetween.currentRectangle.draw2();
        }
        if (InBetween.squareDragged == true) {
            InBetween.currentSquare.draw2();
        }
        if (InBetween.triangleDragged == true) {
            InBetween.currentTriangle.draw2();
        }
    }
    function drawBackground() {
        //console.log("Background generated");
        InBetween.crc2.save();
        if (InBetween.levelCompleted == false) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (InBetween.levelCompleted == true) {
            InBetween.crc2.fillStyle = "#d9d9d9";
        }
        InBetween.crc2.fillRect(0, 0, InBetween.crc2.canvas.width, InBetween.crc2.canvas.height);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    function drawInterface() {
        //console.log("Interface generated");
        InBetween.crc2.save();
        InBetween.crc2.fillStyle = "#1A1A1A";
        InBetween.crc2.fillRect(0, 617, InBetween.crc2.canvas.width, 200);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    // three squares
    let xbutton1 = 20;
    let ybutton1 = 637;
    let wbutton1 = 60;
    let hbutton1 = 60;
    function drawRectanglebutton() {
        InBetween.crc2.save();
        if (InBetween.button1hover == true && InBetween.rectangleArray.length < 5) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.globalAlpha = 0.4;
        }
        if (InBetween.button1hover == false) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (InBetween.rectangleArray.length >= 5) {
            InBetween.crc2.fillStyle = "#222222";
        }
        InBetween.crc2.fillRect(xbutton1, ybutton1, wbutton1, hbutton1);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.save();
        InBetween.crc2.shadowBlur = 7;
        if (InBetween.rectangleArray.length < 5) {
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.fillStyle = "#f2f2f2";
        }
        if (InBetween.rectangleArray.length >= 5) {
            InBetween.crc2.shadowColor = "#555555";
            InBetween.crc2.fillStyle = "#555555";
        }
        InBetween.crc2.fillRect(30, 661, 40, 10);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    let xbutton2 = 100;
    let ybutton2 = 637;
    let wbutton2 = 60;
    let hbutton2 = 60;
    function drawSquarebutton() {
        InBetween.crc2.save();
        if (InBetween.button2hover == true && InBetween.squareArray.length < 4) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.globalAlpha = 0.4;
        }
        if (InBetween.button2hover == false) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (InBetween.squareArray.length >= 4) {
            InBetween.crc2.fillStyle = "#222222";
        }
        InBetween.crc2.fillRect(xbutton2, ybutton2, wbutton2, hbutton2);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.save();
        InBetween.crc2.shadowBlur = 7;
        if (InBetween.squareArray.length < 4) {
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.fillStyle = "#f2f2f2";
        }
        if (InBetween.squareArray.length >= 4) {
            InBetween.crc2.shadowColor = "#555555";
            InBetween.crc2.fillStyle = "#555555";
        }
        InBetween.crc2.fillRect(115, 652, 30, 30);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    let xbutton3 = 180;
    let ybutton3 = 637;
    let wbutton3 = 60;
    let hbutton3 = 60;
    function drawTrianglebutton() {
        InBetween.crc2.save();
        if (InBetween.button3hover == true && InBetween.triangleArray.length < 0) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.globalAlpha = 0.4;
        }
        if (InBetween.button3hover == false) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (InBetween.triangleArray.length >= 0) {
            InBetween.crc2.fillStyle = "#222222";
        }
        InBetween.crc2.fillRect(xbutton3, ybutton3, wbutton3, hbutton3);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.shadowBlur = 7;
        if (InBetween.triangleArray.length < 0) {
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.fillStyle = "#f2f2f2";
        }
        if (InBetween.triangleArray.length >= 0) {
            InBetween.crc2.shadowColor = "#555555";
            InBetween.crc2.fillStyle = "#555555";
        }
        InBetween.crc2.translate(210, 652);
        InBetween.crc2.moveTo(0, 0);
        InBetween.crc2.lineTo(17.5, 30);
        InBetween.crc2.lineTo(-17.5, 30);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    //progress bar
    function drawProgressbar() {
        let totalElements = [...InBetween.rectangleArray, ...InBetween.squareArray, ...InBetween.triangleArray];
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 8) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 8) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(30, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(30, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 7) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 7) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(55, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(55, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 6) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 6) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(80, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(80, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 5) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 5) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(105, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(105, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 4) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 4) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(130, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(130, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 3) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 3) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(155, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(155, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 2) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 2) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(180, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(180, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 1) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 1) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(205, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(205, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        if (totalElements.length > 0) {
            InBetween.crc2.fillStyle = "#333333";
        }
        if (totalElements.length <= 0) {
            InBetween.crc2.fillStyle = "#f2f2f2";
            InBetween.crc2.shadowBlur = 7;
            InBetween.crc2.shadowColor = "#f2f2f2";
            InBetween.crc2.arc(230, 715, 6, 0, 2 * Math.PI);
        }
        InBetween.crc2.arc(230, 715, 5, 0, 2 * Math.PI);
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    let xstart = 300;
    let ystart = 680;
    let rstart = 25;
    function drawStartbutton() {
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.arc(xstart, ystart, rstart, 0, 2 * Math.PI);
        InBetween.crc2.shadowBlur = 15;
        InBetween.crc2.shadowColor = "#F2F2F2F2";
        if (InBetween.startbuttonhover == true) {
            InBetween.crc2.shadowBlur = 28;
            InBetween.crc2.shadowColor = "white";
        }
        InBetween.crc2.fillStyle = "#F2F2F2F2";
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.translate(292, 667);
        /*if (startbuttonhover == true && rstart) {
            crc2.moveTo(-2, -4);
            crc2.lineTo(28, 13);
            crc2.lineTo(-2, 29);
        }*/
        if (rstart == 25) {
            InBetween.crc2.moveTo(0, 0);
            InBetween.crc2.lineTo(23, 13);
            InBetween.crc2.lineTo(0, 26);
        }
        if (rstart == 22) {
            InBetween.crc2.moveTo(2, 3);
            InBetween.crc2.lineTo(20, 13);
            InBetween.crc2.lineTo(2, 23);
        }
        InBetween.crc2.fillStyle = "#333333";
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    function drawLamps() {
        //lamp 1
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.translate(200, 530);
        InBetween.crc2.moveTo(-10, 0);
        InBetween.crc2.lineTo(65, 0);
        InBetween.crc2.lineTo(52, 65);
        InBetween.crc2.lineTo(3, 65);
        let gradient = InBetween.crc2.createLinearGradient(0, 10, 0, 70);
        if (InBetween.levelCompleted == false) {
            gradient.addColorStop(0, "#333333");
        }
        if (InBetween.levelCompleted == true) {
            gradient.addColorStop(0, "#d9d9d9");
        }
        gradient.addColorStop(1, "#f2f2f2");
        InBetween.crc2.fillStyle = gradient;
        InBetween.crc2.globalAlpha = 0.75;
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.translate(200, 600);
        InBetween.crc2.moveTo(0, 0);
        InBetween.crc2.lineTo(55, 0);
        InBetween.crc2.lineTo(45, 25);
        InBetween.crc2.lineTo(10, 25);
        InBetween.crc2.fillStyle = "#666666";
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        InBetween.crc2.save();
        InBetween.crc2.fillStyle = "#F2F2F2";
        InBetween.crc2.shadowBlur = 10;
        InBetween.crc2.shadowColor = "#F2F2F2";
        InBetween.crc2.fillRect(200, 595, 55, 4.5);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        //lamp 2
        InBetween.crc2.beginPath();
        InBetween.crc2.save();
        InBetween.crc2.translate(100, -10);
        InBetween.crc2.moveTo(10, 0);
        InBetween.crc2.lineTo(45, 0);
        InBetween.crc2.lineTo(55, 26);
        InBetween.crc2.lineTo(0, 26);
        InBetween.crc2.fillStyle = "#666666";
        InBetween.crc2.fill();
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
        if (InBetween.levelCompleted == true) {
            InBetween.crc2.beginPath();
            InBetween.crc2.save();
            InBetween.crc2.translate(100, 20);
            InBetween.crc2.moveTo(3, 0);
            InBetween.crc2.lineTo(52, 0);
            InBetween.crc2.lineTo(62, 66);
            InBetween.crc2.lineTo(-6, 66);
            let gradient2 = InBetween.crc2.createLinearGradient(0, 50, 0, 0);
            /*if (levelCompleted == false) {
                gradient2.addColorStop(0, "#333333");
            } */
            gradient2.addColorStop(0, "#d9d9d9");
            gradient2.addColorStop(1, "#f2f2f2");
            InBetween.crc2.fillStyle = gradient2;
            InBetween.crc2.globalAlpha = 0.75;
            InBetween.crc2.fill();
            InBetween.crc2.restore();
            InBetween.crc2.closePath();
        }
    }
    InBetween.xtarget = 100;
    InBetween.ytarget = 16;
    InBetween.wtarget = 55;
    InBetween.htarget = 4;
    InBetween.glow = 2;
    function drawTarget() {
        InBetween.crc2.save();
        if (InBetween.levelCompleted == false) {
            InBetween.crc2.fillStyle = "#ababab";
            if (InBetween.glow <= 10) {
                InBetween.glow += 0.05;
            }
            InBetween.crc2.shadowBlur = InBetween.glow;
            InBetween.crc2.shadowColor = "#ababab";
        }
        if (InBetween.levelCompleted == true) {
            InBetween.crc2.fillStyle = "#F2F2F2";
            InBetween.crc2.shadowBlur = 10;
            InBetween.crc2.shadowColor = "#F2F2F2";
        }
        InBetween.crc2.translate(InBetween.xtarget, InBetween.ytarget);
        InBetween.crc2.fillRect(0, 0, InBetween.wtarget, InBetween.htarget);
        InBetween.crc2.restore();
        InBetween.crc2.closePath();
    }
    /*finishGame;

    function finishGame(_position: Vector): void {
        
        if (
            _position.x > xtarget - wtarget &&
            _position.x < xtarget + wtarget &&
            _position.y > ytarget - htarget &&
            _position.y < ytarget + htarget) {
            console.log("Level gschafft")
        }

    } */
    /*function clamp(value: any, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }*/
    //rotate object 
    function handleRightclick(_client) {
        for (let [index, rectangle] of InBetween.rectangleArray.entries()) {
            if (InBetween.rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {
                console.log("right click");
                rectangle.r += 45;
                if (rectangle.r == 180) {
                    rectangle.r = 0;
                }
                console.log(rectangle.r);
                InBetween.rectangleArray[index] = rectangle;
                InBetween.currentRectangle = rectangle;
            }
        }
        for (let [index, square] of InBetween.squareArray.entries()) {
            if (InBetween.squarePresent == true &&
                _client.offsetX > square.position.x - square.w / 2 &&
                _client.offsetX < square.position.x + square.w / 2 &&
                _client.offsetY > square.position.y - square.h / 2 &&
                _client.offsetY < square.position.y + square.h / 2) {
                square.r += 22.5;
                if (square.r == 90) {
                    square.r = 0;
                }
                InBetween.squareArray[index] = square;
                InBetween.currentSquare = square;
            }
        }
        for (let [index, triangle] of InBetween.triangleArray.entries()) {
            if (InBetween.trianglePresent == true &&
                _client.offsetX > triangle.position.x - triangle.w &&
                _client.offsetX < triangle.position.x + triangle.w &&
                _client.offsetY > triangle.position.y - triangle.h / 2 &&
                _client.offsetY < triangle.position.y + triangle.h / 2) {
                triangle.r += 22.5;
                InBetween.triangleArray[index] = triangle;
                InBetween.currentTriangle = triangle;
            }
        }
    }
    function setStartbuttonRadius() {
        rstart = 25;
    }
    //start ball
    function handleLeftclick(_client) {
        if (_client.offsetX > xstart - rstart &&
            _client.offsetX < xstart + rstart &&
            _client.offsetY > ystart - rstart &&
            _client.offsetY < ystart + rstart) {
            let lightballVector = new InBetween.Vector(228, 585);
            InBetween.throwLightball = new InBetween.Lightball(3.5, lightballVector);
            rstart = 22;
            setTimeout(setStartbuttonRadius, 125);
            //console.log(rstart)
            InBetween.levelCompleted = false;
        }
    }
    //spawn objects
    function handleMousedown(_client) {
        // prevent movement of objects if not left click
        let isLeftClick = _client.which === 1;
        if (!isLeftClick)
            return;
        if (InBetween.rectangleArray.length < 5 &&
            _client.offsetX > xbutton1 &&
            _client.offsetX < xbutton1 + wbutton1 &&
            _client.offsetY > ybutton1 &&
            _client.offsetY < ybutton1 + hbutton1) {
            let rectangleVector = new InBetween.Vector(_client.offsetX, _client.offsetY);
            let rectangle = new InBetween.Rectangle(1, rectangleVector);
            InBetween.currentRectangle = rectangle;
            InBetween.rectangleArray.push(rectangle);
            InBetween.rectanglePresent = true;
            InBetween.rectangleDragged = true;
            window.addEventListener("mousemove", handleMousemoveRectangle);
            window.addEventListener("mouseup", handleMouseup);
        }
        if (InBetween.squareArray.length < 4 &&
            _client.offsetX > xbutton2 &&
            _client.offsetX < xbutton2 + wbutton2 &&
            _client.offsetY > ybutton2 &&
            _client.offsetY < ybutton2 + hbutton2) {
            let squareVector = new InBetween.Vector(_client.offsetX, _client.offsetY);
            let square = new InBetween.Square(1, squareVector);
            InBetween.currentSquare = square;
            InBetween.squareArray.push(square);
            InBetween.squarePresent = true;
            InBetween.squareDragged = true;
            window.addEventListener("mousemove", handleMousemoveSquare);
            window.addEventListener("mouseup", handleMouseup);
        }
        if (InBetween.triangleArray.length < 0 &&
            _client.offsetX > xbutton3 &&
            _client.offsetX < xbutton3 + wbutton3 &&
            _client.offsetY > ybutton3 &&
            _client.offsetY < ybutton3 + hbutton3) {
            let triangleVector = new InBetween.Vector(_client.offsetX, _client.offsetY);
            let triangle = new InBetween.Triangle(1, triangleVector);
            InBetween.currentTriangle = triangle;
            InBetween.triangleArray.push(triangle);
            InBetween.trianglePresent = true;
            InBetween.triangleDragged = true;
            window.addEventListener("mousemove", handleMousemoveTriangle);
            window.addEventListener("mouseup", handleMouseup);
        }
        for (let rectangle of InBetween.rectangleArray) {
            if (InBetween.rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {
                window.addEventListener("mousemove", handleMousemoveRectangle);
                window.addEventListener("mouseup", handleMouseup);
                InBetween.currentRectangle = rectangle;
                InBetween.rectangleDragged = true;
            }
        }
        for (let square of InBetween.squareArray) {
            if (InBetween.squarePresent == true &&
                _client.offsetX > square.position.x - square.w / 2 &&
                _client.offsetX < square.position.x + square.w / 2 &&
                _client.offsetY > square.position.y - square.h / 2 &&
                _client.offsetY < square.position.y + square.h / 2) {
                console.log("square hit");
                window.addEventListener("mousemove", handleMousemoveSquare);
                window.addEventListener("mouseup", handleMouseup);
                InBetween.currentSquare = square;
                InBetween.squareDragged = true;
            }
        }
        for (let triangle of InBetween.triangleArray) {
            if (InBetween.trianglePresent == true &&
                _client.offsetX > triangle.position.x - triangle.w &&
                _client.offsetX < triangle.position.x + triangle.w &&
                _client.offsetY > triangle.position.y - triangle.h / 2 &&
                _client.offsetY < triangle.position.y + triangle.h / 2) {
                console.log("triangle hit");
                window.addEventListener("mousemove", handleMousemoveTriangle);
                window.addEventListener("mouseup", handleMouseup);
                InBetween.currentTriangle = triangle;
                InBetween.triangleDragged = true;
            }
        }
    }
    //hover effect
    function handleMousemoveHover(_client) {
        if (_client.offsetX > xbutton1 &&
            _client.offsetX < xbutton1 + wbutton1 &&
            _client.offsetY > ybutton1 &&
            _client.offsetY < ybutton1 + hbutton1) {
            InBetween.button1hover = true;
        }
        else {
            InBetween.button1hover = false;
        }
        if (_client.offsetX > xbutton2 &&
            _client.offsetX < xbutton2 + wbutton2 &&
            _client.offsetY > ybutton2 &&
            _client.offsetY < ybutton2 + hbutton2) {
            InBetween.button2hover = true;
        }
        else {
            InBetween.button2hover = false;
        }
        if (_client.offsetX > xbutton3 &&
            _client.offsetX < xbutton3 + wbutton3 &&
            _client.offsetY > ybutton3 &&
            _client.offsetY < ybutton3 + hbutton3) {
            InBetween.button3hover = true;
        }
        else {
            InBetween.button3hover = false;
        }
        if (_client.offsetX > xstart - rstart &&
            _client.offsetX < xstart + rstart &&
            _client.offsetY > ystart - rstart &&
            _client.offsetY < ystart + rstart) {
            InBetween.startbuttonhover = true;
        }
        else {
            InBetween.startbuttonhover = false;
        }
        /*for (let rectangle of rectangleArray) {

            if (
                rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {
                console.log("rectangle hover")
                rectanglehover = true;
                currentRectangle = rectangle;
            }

            else {
                rectanglehover = false
            }

            console.log(rectanglehover)

        }*/
    }
    //drag and drop
    function handleMousemoveRectangle(_client) {
        InBetween.currentRectangle.position.x = _client.offsetX;
        InBetween.currentRectangle.position.y = _client.offsetY;
        InBetween.rectangleDragged = true;
    }
    InBetween.handleMousemoveRectangle = handleMousemoveRectangle;
    function handleMousemoveSquare(_client) {
        InBetween.currentSquare.position.x = _client.offsetX;
        InBetween.currentSquare.position.y = _client.offsetY;
        InBetween.squareDragged = true;
    }
    InBetween.handleMousemoveSquare = handleMousemoveSquare;
    function handleMousemoveTriangle(_client) {
        InBetween.currentTriangle.position.x = _client.offsetX;
        InBetween.currentTriangle.position.y = _client.offsetY;
        InBetween.triangleDragged = true;
    }
    InBetween.handleMousemoveTriangle = handleMousemoveTriangle;
    function handleMouseup(_client) {
        for (let rectangle of InBetween.rectangleArray) {
            InBetween.currentRectangle = rectangle;
            if (InBetween.rectanglePresent == true &&
                InBetween.currentRectangle.position.y > 617) {
                console.log("remove rectangle");
                let index = InBetween.rectangleArray.indexOf(InBetween.currentRectangle);
                InBetween.rectangleArray.splice(index, 1);
            }
        }
        for (let square of InBetween.squareArray) {
            InBetween.currentSquare = square;
            if (InBetween.squarePresent == true &&
                InBetween.currentSquare.position.y > 617) {
                console.log("remove square ");
                let index = InBetween.squareArray.indexOf(InBetween.currentSquare);
                InBetween.squareArray.splice(index, 1);
            }
        }
        for (let triangle of InBetween.triangleArray) {
            InBetween.currentTriangle = triangle;
            if (InBetween.trianglePresent == true &&
                InBetween.currentTriangle.position.y > 617) {
                console.log("remove triangle");
                let index = InBetween.triangleArray.indexOf(InBetween.currentTriangle);
                InBetween.triangleArray.splice(index, 1);
            }
        }
        /*if(
            currentSquare.position.y > 617
        ){
            console.log("remove");
        }
    
        if(
            spawnTriangle.position.y > 617
        ){
            console.log("remove");
        }*/
        window.removeEventListener("mousemove", handleMousemoveRectangle);
        window.removeEventListener("mousemove", handleMousemoveSquare);
        window.removeEventListener("mousemove", handleMousemoveTriangle);
        window.removeEventListener("mouseup", handleMouseup);
        InBetween.rectangleDragged = false;
        InBetween.squareDragged = false;
        InBetween.triangleDragged = false;
    }
})(InBetween || (InBetween = {}));
//# sourceMappingURL=Game.js.map