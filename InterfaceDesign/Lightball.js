"use strict";
var InBetween;
(function (InBetween) {
    class Lightball {
        constructor(_radius, _position) {
            this.position = _position;
            this.radius = _radius;
            this.velocity = new InBetween.Vector(0, -7);
            /*let x = 228;
            let y = 585;
            let dx = -2;
            let dy = -1;
            let radius = 10*/
        }
        draw() {
            //window.requestAnimationFrame(drawBall);
            //crc2.clearRect(0,0,crc2.canvas.width, crc2.canvas.height);
            InBetween.crc2.beginPath();
            InBetween.crc2.save();
            InBetween.crc2.translate(this.position.x, this.position.y);
            InBetween.crc2.scale(this.radius, this.radius);
            InBetween.crc2.arc(0, 0, this.radius, 0, 5 * Math.PI);
            InBetween.crc2.shadowBlur = 10;
            InBetween.crc2.shadowColor = "#F2F2F2F2";
            InBetween.crc2.fillStyle = "#F2F2F2F2";
            InBetween.crc2.fill();
            InBetween.crc2.restore();
            InBetween.crc2.closePath();
        }
        move(_timeslice) {
            //let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            //this.position.add(offset);
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            //this.velocity.x += 3;
            //this.velocity.y += -7;
            //console.log(this.position.x);
            /*if(this.position.x + 10 > crc2.canvas.width|| this.position.x - 10 < 0) {
               this.velocity.x = -this.velocity.x;
           }
   
           if(this.position.y + 10 > crc2.canvas.height - 130|| this.position.y - 10 < 0) {
               this.velocity.y = -this.velocity.y;
           } */
            /*if (
                this.position.x + this.size > xtarget - wtarget &&
                this.position.x + this.size < xtarget + wtarget &&
                this.position.y + this.size > ytarget - htarget &&
                this.position.y + this.size < ytarget + htarget) {
                console.log("Level gschafft");

            }*/
            if (this.position.x + this.radius > InBetween.xtarget &&
                this.position.x - this.radius < InBetween.xtarget + InBetween.wtarget &&
                this.position.y + this.radius > InBetween.ytarget &&
                this.position.y - this.radius < InBetween.ytarget + InBetween.htarget) {
                console.log("Level gschafft");
                InBetween.levelCompleted = true;
            }
            for (let [index, rectangle] of InBetween.rectangleArray.entries()) {
                if (InBetween.rectanglePresent == true && rectangle.isHit == false && rectangle.r == 0 &&
                    this.position.x + this.radius > rectangle.position.x - rectangle.w / 2 &&
                    this.position.x - this.radius < rectangle.position.x + rectangle.w / 2 &&
                    this.position.y + this.radius > rectangle.position.y - rectangle.h / 2 &&
                    this.position.y - this.radius < rectangle.position.y + rectangle.h / 2) {
                    rectangle.isHit = true;
                    console.log(rectangle.isHit);
                    InBetween.rectangleArray[index] = rectangle;
                    InBetween.currentRectangle = rectangle;
                    this.velocity.x = -this.velocity.x;
                    this.velocity.y = -this.velocity.y;
                    console.log(this.velocity);
                }
                if (InBetween.rectanglePresent == true && rectangle.isHit == false && rectangle.r == 45 &&
                    this.position.x + this.radius > rectangle.position.x - rectangle.w / 2 &&
                    this.position.x - this.radius < rectangle.position.x + rectangle.w / 2 &&
                    this.position.y + this.radius > rectangle.position.y - rectangle.h / 2 &&
                    this.position.y - this.radius < rectangle.position.y + rectangle.h / 2) {
                    rectangle.isHit = true;
                    console.log(rectangle.isHit);
                    InBetween.rectangleArray[index] = rectangle;
                    InBetween.currentRectangle = rectangle;
                    if (rectangle.r == 45 && this.velocity.x == 0 && this.velocity.y == -7) {
                        this.velocity.x = -7;
                        this.velocity.y = 0;
                        continue;
                    }
                    if (rectangle.r == 45 && this.velocity.x == 7 && this.velocity.y == 0) {
                        this.velocity = new InBetween.Vector(0, 7);
                        continue;
                    }
                    if (rectangle.r == 45 && this.velocity.x == 0 && this.velocity.y == 7) {
                        this.velocity = new InBetween.Vector(7, 0);
                        continue;
                    }
                    if (rectangle.r == 45 && this.velocity.x == -7 && this.velocity.y == 0) {
                        this.velocity = new InBetween.Vector(0, -7);
                        continue;
                    }
                    console.log(this.velocity);
                }
                if (InBetween.rectanglePresent == true && rectangle.isHit == false && rectangle.r == 90 &&
                    this.position.x + this.radius > rectangle.position.x - rectangle.h / 2 &&
                    this.position.x - this.radius < rectangle.position.x + rectangle.h / 2 &&
                    this.position.y + this.radius > rectangle.position.y - rectangle.w / 2 &&
                    this.position.y - this.radius < rectangle.position.y + rectangle.w / 2) {
                    rectangle.isHit = true;
                    console.log(rectangle.isHit);
                    InBetween.rectangleArray[index] = rectangle;
                    InBetween.currentRectangle = rectangle;
                    this.velocity.x = -this.velocity.x;
                    this.velocity.y = -this.velocity.y;
                    console.log(this.velocity);
                }
                if (InBetween.rectanglePresent == true && rectangle.isHit == false && rectangle.r == 135 &&
                    this.position.x + this.radius > rectangle.position.x - rectangle.w / 2 &&
                    this.position.x - this.radius < rectangle.position.x + rectangle.w / 2 &&
                    this.position.y + this.radius > rectangle.position.y - rectangle.h / 2 &&
                    this.position.y - this.radius < rectangle.position.y + rectangle.h / 2) {
                    rectangle.isHit = true;
                    console.log(rectangle.isHit);
                    InBetween.rectangleArray[index] = rectangle;
                    InBetween.currentRectangle = rectangle;
                    if (rectangle.r == 135 && this.velocity.x == 0 && this.velocity.y == -7) {
                        this.velocity.x = 7;
                        this.velocity.y = 0;
                        continue;
                    }
                    if (rectangle.r == 135 && this.velocity.x == 7 && this.velocity.y == 0) {
                        this.velocity = new InBetween.Vector(0, -7);
                        continue;
                    }
                    if (rectangle.r == 135 && this.velocity.x == 0 && this.velocity.y == 7) {
                        this.velocity = new InBetween.Vector(-7, 0);
                        continue;
                    }
                    if (rectangle.r == 135 && this.velocity.x == -7 && this.velocity.y == 0) {
                        this.velocity = new InBetween.Vector(0, 7);
                        continue;
                    }
                    console.log(this.velocity);
                }
                if (InBetween.rectanglePresent == true && rectangle.isHit == true &&
                    this.position.x + this.radius > rectangle.position.x - rectangle.w / 2 &&
                    this.position.x - this.radius < rectangle.position.x + rectangle.w / 2 &&
                    this.position.y + this.radius > rectangle.position.y - rectangle.h / 2 &&
                    this.position.y - this.radius < rectangle.position.y + rectangle.h / 2) {
                    continue;
                }
                rectangle.isHit = false;
            }
            for (let [index, square] of InBetween.squareArray.entries()) {
                if (InBetween.squarePresent == true && square.isHit == false && square.r == 0 &&
                    this.position.x + this.radius > square.position.x - square.w / 2 &&
                    this.position.x - this.radius < square.position.x + square.w / 2 &&
                    this.position.y + this.radius > square.position.y - square.h / 2 &&
                    this.position.y - this.radius < square.position.y + square.h / 2) {
                    square.isHit = true;
                    console.log(square.isHit);
                    InBetween.squareArray[index] = square;
                    InBetween.currentSquare = square;
                    this.velocity.x = -this.velocity.x;
                    this.velocity.y = -this.velocity.y;
                    console.log(this.velocity);
                }
                /* if (squarePresent == true && square.isHit == false && square.r == 45 &&
                    this.position.x + this.radius > square.position.x - square.w / 2 &&
                    this.position.x - this.radius < square.position.x + square.w / 2 &&
                    this.position.y + this.radius > square.position.y - square.h / 2 &&
                    this.position.y - this.radius < square.position.y + square.h / 2
                ) {

                    square.isHit = true;
                    console.log(square.isHit);
                    squareArray[index] = square;
                    currentSquare = square;

                    if (square.r == 45 && this.velocity.x == 0 && this.velocity.y == -7) {
                        this.velocity.x = -7;
                        this.velocity.y = 0;
                        continue;
                    }

                    if (square.r == 45 && this.velocity.x == 7 && this.velocity.y == 0) {
                        this.velocity = new Vector(0, 7);
                        continue;
                    }
                    if (square.r == 45 && this.velocity.x == 0 && this.velocity.y == 7) {
                        this.velocity = new Vector(7, 0);
                        continue;
                    }
                    if (square.r == 45 && this.velocity.x == -7 && this.velocity.y == 0) {
                        this.velocity = new Vector(0, -7);
                        continue;
                    }



                    console.log(this.velocity)
                }

                if (squarePresent == true && square.isHit == false && square.r == 90 &&
                    this.position.x + this.radius > square.position.x - square.h / 2 &&
                    this.position.x - this.radius < square.position.x + square.h / 2 &&
                    this.position.y + this.radius > square.position.y - square.w / 2 &&
                    this.position.y - this.radius < square.position.y + square.w / 2) {

                    square.isHit = true;
                    console.log(square.isHit);
                    squareArray[index] = square;
                    currentSquare = square;



                    this.velocity.x = -this.velocity.x;
                    this.velocity.y = -this.velocity.y;

                    console.log(this.velocity)
                }

                if (squarePresent == true && square.isHit == false && square.r == 135 &&
                    this.position.x + this.radius > square.position.x - square.w / 2 &&
                    this.position.x - this.radius < square.position.x + square.w / 2 &&
                    this.position.y + this.radius > square.position.y - square.h / 2 &&
                    this.position.y - this.radius < square.position.y + square.h / 2) {

                    square.isHit = true;
                    console.log(square.isHit);
                    squareArray[index] = square;
                    currentSquare = square;


                    if (square.r == 135 && this.velocity.x == 0 && this.velocity.y == -7) {
                        this.velocity.x = 7;
                        this.velocity.y = 0;
                        continue;
                    }
                    if (square.r == 135 && this.velocity.x == 7 && this.velocity.y == 0) {
                        this.velocity = new Vector(0, -7);
                        continue;
                    }
                    if (square.r == 135 && this.velocity.x == 0 && this.velocity.y == 7) {
                        this.velocity = new Vector(-7, 0);
                        continue;
                    }
                    if (square.r == 135 && this.velocity.x == -7 && this.velocity.y == 0) {
                        this.velocity = new Vector(0, 7);
                        continue;
                    }


                    console.log(this.velocity)
                }

                if (squarePresent == true && square.isHit == true &&
                    this.position.x + this.radius > square.position.x - square.w / 2 &&
                    this.position.x - this.radius < square.position.x + square.w / 2 &&
                    this.position.y + this.radius > square.position.y - square.h / 2 &&
                    this.position.y - this.radius < square.position.y + square.h / 2) {
                    continue;
                } */
                square.isHit = false;
            }
            /* rect1.x < rect2.x + rect2.width &&
             rect1.x + rect1.width > rect2.x &&
             rect1.y < rect2.y + rect2.height &&
             rect1.y + rect1.height > rect2.y */
        }
    }
    InBetween.Lightball = Lightball;
})(InBetween || (InBetween = {}));
//# sourceMappingURL=Lightball.js.map