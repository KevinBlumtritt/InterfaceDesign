namespace InBetween {

    window.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    window.addEventListener("load", handleLoad);
    window.addEventListener("click", handleLeftclick);
    window.addEventListener("contextmenu", handleRightclick);
    window.addEventListener("mousedown", handleMousedown);
    window.addEventListener("mousemove", handleMousemoveHover)


    export let crc2: CanvasRenderingContext2D;
    let image: ImageData;
    let fps: number = 15;

    export let levelCompleted: boolean = false;
    export let throwLightball: Lightball;
    export let currentRectangle: Rectangle;
    export let currentSquare: Square;
    export let currentTriangle: Triangle;
    export let rectangleArray: Rectangle[] = [];
    export let squareArray: Square[] = [];
    export let triangleArray: Triangle[] = [];
    export let diff: Vector;
    export let rectanglePresent: boolean = false;
    export let squarePresent: boolean = false;
    export let trianglePresent: boolean = false;
    export let rectangleDragged: boolean = false;
    export let squareDragged: boolean = false;
    export let triangleDragged: boolean = false;
    export let button1hover: boolean = false;
    export let button2hover: boolean = false;
    export let button3hover: boolean = false;
    export let startbuttonhover: boolean = false;
    export let rectanglehover: boolean = false;
    export let trianglehover: boolean = false;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

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
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);

    }

    /*function myFunction() : void {
        let x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }*/

    function update(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(image, 0, 0);

        let outOfBounds = throwLightball && throwLightball.position.y < 0;

        //console.log(rectangleDragged);

        if (throwLightball && !outOfBounds && levelCompleted == false) {
            let totalElements = [...rectangleArray, ...squareArray, ...triangleArray];

            for (let element of totalElements) {
            }

            throwLightball.draw();
            throwLightball.move(1);
        }


        if (rectangleArray) {
            for (let i: number = 0; i < rectangleArray.length; i++) {
                rectangleArray[i].draw();
            }
        }

        if (squareArray) {
            for (let i: number = 0; i < squareArray.length; i++) {
                squareArray[i].draw();
            }
        }

        if (triangleArray) {
            for (let i: number = 0; i < triangleArray.length; i++) {
                triangleArray[i].draw();
            }
        }

        /*if (glow < 15) {
            glow += 0.2;
        }
        if (glow > 14 && glow > 0) {
            glow -= 0.2;
        } */

        if (levelCompleted == true) {
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


        if (rectangleArray) {
            for (let i: number = 0; i < rectangleArray.length; i++) {
                rectangleArray[i].draw();
            }
        }

        if (squareArray) {
            for (let i: number = 0; i < squareArray.length; i++) {
                squareArray[i].draw();
            }
        }

        if (triangleArray) {
            for (let i: number = 0; i < triangleArray.length; i++) {
                triangleArray[i].draw();
            }
        }

        if (rectangleDragged == true) {
            currentRectangle.draw2();
        }

        if (squareDragged == true) {
            currentSquare.draw2();
        }

        if (triangleDragged == true) {
            currentTriangle.draw2();
        }


    }

    function drawBackground(): void {

        //console.log("Background generated");

        crc2.save();
        if (levelCompleted == false) {
            crc2.fillStyle = "#333333";
        }
        if (levelCompleted == true) {
            crc2.fillStyle = "#d9d9d9";
        }
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
        crc2.closePath();

    }

    function drawInterface(): void {
        //console.log("Interface generated");

        crc2.save();
        crc2.fillStyle = "#1A1A1A";
        crc2.fillRect(0, 617, crc2.canvas.width, 200);
        crc2.restore();
        crc2.closePath();
    }

    // three squares
    let xbutton1: number = 20;
    let ybutton1: number = 637;
    let wbutton1: number = 60;
    let hbutton1: number = 60;


    function drawRectanglebutton(): void {

        crc2.save();

        if (button1hover == true && rectangleArray.length < 5) {
            crc2.fillStyle = "#f2f2f2";
            crc2.globalAlpha = 0.4;
        }

        if (button1hover == false) {
            crc2.fillStyle = "#333333";
        }

        if (rectangleArray.length >= 5) {
            crc2.fillStyle = "#222222";
        }

        crc2.fillRect(xbutton1, ybutton1, wbutton1, hbutton1);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.shadowBlur = 7;

        if (rectangleArray.length < 5) {
            crc2.shadowColor = "#f2f2f2";
            crc2.fillStyle = "#f2f2f2";
        }


        if (rectangleArray.length >= 5) {
            crc2.shadowColor = "#555555";
            crc2.fillStyle = "#555555";
        }

        crc2.fillRect(30, 661, 40, 10);
        crc2.restore();
        crc2.closePath();
    }

    let xbutton2: number = 100;
    let ybutton2: number = 637;
    let wbutton2: number = 60;
    let hbutton2: number = 60;

    function drawSquarebutton(): void {

        crc2.save();
        if (button2hover == true && squareArray.length < 4) {
            crc2.fillStyle = "#f2f2f2";
            crc2.globalAlpha = 0.4;
        }

        if (button2hover == false) {
            crc2.fillStyle = "#333333";
        }

        if (squareArray.length >= 4) {
            crc2.fillStyle = "#222222";
        }

        crc2.fillRect(xbutton2, ybutton2, wbutton2, hbutton2);
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.shadowBlur = 7;

        if (squareArray.length < 4) {
            crc2.shadowColor = "#f2f2f2";
            crc2.fillStyle = "#f2f2f2";
        }

        if (squareArray.length >= 4) {
            crc2.shadowColor = "#555555";
            crc2.fillStyle = "#555555";
        }
        crc2.fillRect(115, 652, 30, 30);
        crc2.restore();
        crc2.closePath();
    }

    let xbutton3: number = 180;
    let ybutton3: number = 637;
    let wbutton3: number = 60;
    let hbutton3: number = 60;

    function drawTrianglebutton(): void {

        crc2.save();
        if (button3hover == true && triangleArray.length < 0) {
            crc2.fillStyle = "#f2f2f2";
            crc2.globalAlpha = 0.4;
        }

        if (button3hover == false) {
            crc2.fillStyle = "#333333";
        }

        if (triangleArray.length >= 0) {
            crc2.fillStyle = "#222222";
        }

        crc2.fillRect(xbutton3, ybutton3, wbutton3, hbutton3);
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        crc2.shadowBlur = 7;

        if (triangleArray.length < 0) {
            crc2.shadowColor = "#f2f2f2";
            crc2.fillStyle = "#f2f2f2";
        }

        if (triangleArray.length >= 0) {
            crc2.shadowColor = "#555555";
            crc2.fillStyle = "#555555";
        }

        crc2.translate(210, 652);
        crc2.moveTo(0, 0);
        crc2.lineTo(17.5, 30);
        crc2.lineTo(-17.5, 30);

        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }

    //progress bar

    function drawProgressbar(): void {

        let totalElements = [...rectangleArray, ...squareArray, ...triangleArray];

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 0) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 0) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(30, 715, 8, 0, 2 * Math.PI);

        }
        crc2.arc(30, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 1) {
            crc2.fillStyle = "#333333";

        }

        if (totalElements.length > 1) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(55, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(55, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 2) {
            crc2.fillStyle = "#333333";

        }

        if (totalElements.length > 2) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(80, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(80, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 3) {
            crc2.fillStyle = "#333333";

        }

        if (totalElements.length > 3) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(105, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(105, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 4) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 4) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(130, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(130, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 5) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 5) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(155, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(155, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 6) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 6) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(180, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(180, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 7) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 7) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(205, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(205, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        if (totalElements.length <= 8) {
            crc2.fillStyle = "#333333";
        }

        if (totalElements.length > 8) {
            crc2.fillStyle = "#f2f2f2";
            crc2.shadowBlur = 7;
            crc2.shadowColor = "#f2f2f2";
            crc2.arc(230, 715, 8, 0, 2 * Math.PI);
        }
        crc2.arc(230, 715, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.closePath();


    }

    let xstart: number = 300;
    let ystart: number = 680;
    let rstart: number = 25;

    function drawStartbutton(): void {


        crc2.beginPath();
        crc2.save();
        crc2.arc(xstart, ystart, rstart, 0, 2 * Math.PI);
        crc2.shadowBlur = 15;
        crc2.shadowColor = "#F2F2F2F2";

        if (startbuttonhover == true) {
            crc2.shadowBlur = 28;
            crc2.shadowColor = "white";
        }

        crc2.fillStyle = "#F2F2F2F2";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.beginPath();
        crc2.save();
        crc2.translate(292, 667);

        /*if (startbuttonhover == true && rstart) {
            crc2.moveTo(-2, -4);
            crc2.lineTo(28, 13);
            crc2.lineTo(-2, 29);
        }*/

        if (rstart == 25) {
            crc2.moveTo(0, 0);
            crc2.lineTo(23, 13);
            crc2.lineTo(0, 26);
        }
        if (rstart == 22) {
            crc2.moveTo(2, 3);
            crc2.lineTo(20, 13);
            crc2.lineTo(2, 23);
        }

        crc2.fillStyle = "#333333";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
    }

    function drawLamps(): void {

        //lamp 1

        crc2.beginPath();
        crc2.save();
        crc2.translate(200, 530);
        crc2.moveTo(-10, 0);
        crc2.lineTo(65, 0);
        crc2.lineTo(52, 65);
        crc2.lineTo(3, 65);
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 10, 0, 70);

        if (levelCompleted == false) {
            gradient.addColorStop(0, "#333333");
        }

        if (levelCompleted == true) {
            gradient.addColorStop(0, "#d9d9d9");
        }

        gradient.addColorStop(1, "#f2f2f2");
        crc2.fillStyle = gradient;
        crc2.globalAlpha = 0.75;
        crc2.fill();
        crc2.restore();
        crc2.closePath();


        crc2.beginPath();
        crc2.save();
        crc2.translate(200, 600);
        crc2.moveTo(0, 0);
        crc2.lineTo(55, 0);
        crc2.lineTo(45, 25);
        crc2.lineTo(10, 25);
        crc2.fillStyle = "#666666";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        crc2.save();
        crc2.fillStyle = "#F2F2F2";
        crc2.shadowBlur = 10;
        crc2.shadowColor = "#F2F2F2";
        crc2.fillRect(200, 595, 55, 4.5);
        crc2.restore();
        crc2.closePath();

        //lamp 2

        crc2.beginPath();
        crc2.save();
        crc2.translate(100, -10);
        crc2.moveTo(10, 0);
        crc2.lineTo(45, 0);
        crc2.lineTo(55, 26);
        crc2.lineTo(0, 26);
        crc2.fillStyle = "#666666";
        crc2.fill();
        crc2.restore();
        crc2.closePath();

        if (levelCompleted == true) {
            crc2.beginPath();
            crc2.save();
            crc2.translate(100, 20);
            crc2.moveTo(3, 0);
            crc2.lineTo(52, 0);
            crc2.lineTo(62, 66);
            crc2.lineTo(-6, 66);
            let gradient2: CanvasGradient = crc2.createLinearGradient(0, 50, 0, 0);

            /*if (levelCompleted == false) {
                gradient2.addColorStop(0, "#333333");
            } */


            gradient2.addColorStop(0, "#d9d9d9");


            gradient2.addColorStop(1, "#f2f2f2");
            crc2.fillStyle = gradient2;
            crc2.globalAlpha = 0.75;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }

    }

    export let xtarget: number = 100;
    export let ytarget: number = 16;
    export let wtarget: number = 55;
    export let htarget: number = 4;
    export let glow: number = 2;

    function drawTarget(): void {

        crc2.save();


        if (levelCompleted == false) {
            crc2.fillStyle = "#ababab"; if (glow <= 10) {
                glow += 0.05;
            }
            crc2.shadowBlur = glow;
            crc2.shadowColor = "#ababab";
        }
        if (levelCompleted == true) {
            crc2.fillStyle = "#F2F2F2";
            crc2.shadowBlur = 10;
            crc2.shadowColor = "#F2F2F2";
        }

        crc2.translate(xtarget, ytarget);
        crc2.fillRect(0, 0, wtarget, htarget);
        crc2.restore();
        crc2.closePath();
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

    function handleRightclick(_client: MouseEvent): void {


        for (let [index, rectangle] of rectangleArray.entries()) {
            if (rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {

                console.log("right click");

                rectangle.r += 45;
                if (rectangle.r == 180) {
                    rectangle.r = 0;
                }
                console.log(rectangle.r)
                rectangleArray[index] = rectangle;
                currentRectangle = rectangle;
            }
        }

        for (let [index, square] of squareArray.entries()) {
            if (squarePresent == true &&
                _client.offsetX > square.position.x - square.w / 2 &&
                _client.offsetX < square.position.x + square.w / 2 &&
                _client.offsetY > square.position.y - square.h / 2 &&
                _client.offsetY < square.position.y + square.h / 2) {

                square.r += 22.5;
                if (square.r == 90) {
                    square.r = 0;
                }
                squareArray[index] = square;
                currentSquare = square;
            }
        }

        for (let [index, triangle] of triangleArray.entries()) {
            if (trianglePresent == true &&
                _client.offsetX > triangle.position.x - triangle.w &&
                _client.offsetX < triangle.position.x + triangle.w &&
                _client.offsetY > triangle.position.y - triangle.h / 2 &&
                _client.offsetY < triangle.position.y + triangle.h / 2) {

                triangle.r += 22.5;

                triangleArray[index] = triangle;
                currentTriangle = triangle;
            }
        }


    }

    function setStartbuttonRadius(): void {
        rstart = 25;
    }

    //start ball

    function handleLeftclick(_client: MouseEvent): void {


        if (
            _client.offsetX > xstart - rstart &&
            _client.offsetX < xstart + rstart &&
            _client.offsetY > ystart - rstart &&
            _client.offsetY < ystart + rstart) {

            let lightballVector = new Vector(228, 585);
            throwLightball = new Lightball(3.5, lightballVector);
            rstart = 22;
            setTimeout(setStartbuttonRadius, 125);
            //console.log(rstart)
            levelCompleted = false;

        }

    }

    //spawn objects

    function handleMousedown(_client: MouseEvent): void {

        // prevent movement of objects if not left click
        let isLeftClick = _client.which === 1;
        if (!isLeftClick) return;

        if (rectangleArray.length < 5 &&
            _client.offsetX > xbutton1 &&
            _client.offsetX < xbutton1 + wbutton1 &&
            _client.offsetY > ybutton1 &&
            _client.offsetY < ybutton1 + hbutton1) {

            let rectangleVector = new Vector(_client.offsetX, _client.offsetY);
            let rectangle = new Rectangle(1, rectangleVector);
            currentRectangle = rectangle;
            rectangleArray.push(rectangle);
            rectanglePresent = true;
            rectangleDragged = true;
            window.addEventListener("mousemove", handleMousemoveRectangle);
            window.addEventListener("mouseup", handleMouseup);
        }

        if (squareArray.length < 4 &&
            _client.offsetX > xbutton2 &&
            _client.offsetX < xbutton2 + wbutton2 &&
            _client.offsetY > ybutton2 &&
            _client.offsetY < ybutton2 + hbutton2) {

            let squareVector = new Vector(_client.offsetX, _client.offsetY);
            let square = new Square(1, squareVector);
            currentSquare = square;
            squareArray.push(square);
            squarePresent = true;
            squareDragged = true;
            window.addEventListener("mousemove", handleMousemoveSquare);
            window.addEventListener("mouseup", handleMouseup);
        }

        if (triangleArray.length < 0 &&
            _client.offsetX > xbutton3 &&
            _client.offsetX < xbutton3 + wbutton3 &&
            _client.offsetY > ybutton3 &&
            _client.offsetY < ybutton3 + hbutton3) {

            let triangleVector = new Vector(_client.offsetX, _client.offsetY);
            let triangle = new Triangle(1, triangleVector);
            currentTriangle = triangle;
            triangleArray.push(triangle);
            trianglePresent = true;
            triangleDragged = true;
            window.addEventListener("mousemove", handleMousemoveTriangle);
            window.addEventListener("mouseup", handleMouseup);
        }

        for (let rectangle of rectangleArray) {

            if (
                rectanglePresent == true &&
                _client.offsetX > rectangle.position.x - rectangle.w / 2 &&
                _client.offsetX < rectangle.position.x + rectangle.w / 2 &&
                _client.offsetY > rectangle.position.y - rectangle.h / 2 &&
                _client.offsetY < rectangle.position.y + rectangle.h / 2) {

                window.addEventListener("mousemove", handleMousemoveRectangle);
                window.addEventListener("mouseup", handleMouseup);
                currentRectangle = rectangle;
                rectangleDragged = true;
            }
        }

        for (let square of squareArray) {

            if (
                squarePresent == true &&
                _client.offsetX > square.position.x - square.w / 2 &&
                _client.offsetX < square.position.x + square.w / 2 &&
                _client.offsetY > square.position.y - square.h / 2 &&
                _client.offsetY < square.position.y + square.h / 2) {

                console.log("square hit");
                window.addEventListener("mousemove", handleMousemoveSquare);
                window.addEventListener("mouseup", handleMouseup);
                currentSquare = square;
                squareDragged = true;
            }
        }


        for (let triangle of triangleArray) {

            if (
                trianglePresent == true &&
                _client.offsetX > triangle.position.x - triangle.w &&
                _client.offsetX < triangle.position.x + triangle.w &&
                _client.offsetY > triangle.position.y - triangle.h / 2 &&
                _client.offsetY < triangle.position.y + triangle.h / 2) {

                console.log("triangle hit");
                window.addEventListener("mousemove", handleMousemoveTriangle);
                window.addEventListener("mouseup", handleMouseup);
                currentTriangle = triangle;
                triangleDragged = true;
            }
        }
    }

    //hover effect

    function handleMousemoveHover(_client: MouseEvent): void {
        if (
            _client.offsetX > xbutton1 &&
            _client.offsetX < xbutton1 + wbutton1 &&
            _client.offsetY > ybutton1 &&
            _client.offsetY < ybutton1 + hbutton1) {
            button1hover = true;
        }

        else {
            button1hover = false
        }

        if (
            _client.offsetX > xbutton2 &&
            _client.offsetX < xbutton2 + wbutton2 &&
            _client.offsetY > ybutton2 &&
            _client.offsetY < ybutton2 + hbutton2) {
            button2hover = true;
        }

        else {
            button2hover = false
        }

        if (
            _client.offsetX > xbutton3 &&
            _client.offsetX < xbutton3 + wbutton3 &&
            _client.offsetY > ybutton3 &&
            _client.offsetY < ybutton3 + hbutton3) {
            button3hover = true;
        }

        else {
            button3hover = false
        }

        if (
            _client.offsetX > xstart - rstart &&
            _client.offsetX < xstart + rstart &&
            _client.offsetY > ystart - rstart &&
            _client.offsetY < ystart + rstart) {
            startbuttonhover = true;

        }

        else {
            startbuttonhover = false
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

    export function handleMousemoveRectangle(_client: MouseEvent): void {


        currentRectangle.position.x = _client.offsetX;
        currentRectangle.position.y = _client.offsetY;
        rectangleDragged = true;

    }


    export function handleMousemoveSquare(_client: MouseEvent): void {

        currentSquare.position.x = _client.offsetX;
        currentSquare.position.y = _client.offsetY;
        squareDragged = true;

    }

    export function handleMousemoveTriangle(_client: MouseEvent): void {

        currentTriangle.position.x = _client.offsetX;
        currentTriangle.position.y = _client.offsetY;
        triangleDragged = true;
    }

    function handleMouseup(_client: MouseEvent): void {

        for (let rectangle of rectangleArray) {
            currentRectangle = rectangle;
            if (rectanglePresent == true &&
                currentRectangle.position.y > 617
            ) {
                console.log("remove rectangle");
                let index: number = rectangleArray.indexOf(currentRectangle);
                rectangleArray.splice(index, 1);
            }
        }


        for (let square of squareArray) {
            currentSquare = square;
            if (squarePresent == true &&
                currentSquare.position.y > 617
            ) {
                console.log("remove square ");
                let index: number = squareArray.indexOf(currentSquare);
                squareArray.splice(index, 1);
            }
        }

        for (let triangle of triangleArray) {
            currentTriangle = triangle;
            if (trianglePresent == true &&
                currentTriangle.position.y > 617
            ) {
                console.log("remove triangle");
                let index: number = triangleArray.indexOf(currentTriangle);
                triangleArray.splice(index, 1);
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

        rectangleDragged = false;
        squareDragged = false;
        triangleDragged = false;
    }


}
