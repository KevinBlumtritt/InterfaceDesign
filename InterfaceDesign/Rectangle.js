"use strict";
var InBetween;
(function (InBetween) {
    class Rectangle {
        constructor(_size, _position) {
            /* x: number = 20;
            y: number = 637; */
            this.w = 80;
            this.h = 20;
            this.r = 0;
            this.isHit = false;
            this.position = _position;
            this.size = _size;
        }
        draw() {
            InBetween.crc2.beginPath();
            InBetween.crc2.save();
            InBetween.crc2.translate(this.position.x, this.position.y);
            InBetween.crc2.rotate(this.r * Math.PI / 180);
            InBetween.crc2.translate(-this.w / 2, -this.h / 2);
            if (this.position.y <= 617 && InBetween.rectanglehover == true) {
                InBetween.crc2.fillStyle = "#f2f2f2";
                InBetween.crc2.shadowBlur = 14;
                InBetween.crc2.shadowColor = "#f2f2f2";
            }
            if (this.position.y <= 617 && InBetween.rectanglehover == false) {
                InBetween.crc2.fillStyle = "#f2f2f2";
                InBetween.crc2.shadowBlur = 7;
                InBetween.crc2.shadowColor = "#f2f2f2";
            }
            if (this.position.y > 617) {
                InBetween.crc2.fillStyle = "#f2f2f2";
                InBetween.crc2.shadowBlur = 7;
                InBetween.crc2.shadowColor = "#f2f2f2";
                InBetween.crc2.globalAlpha = 0.2;
            }
            /*if (rectangleDragged == true) {
 
                 //crc2.strokeStyle = "#81BEF7";
                 //crc2.lineWidth = 5;
                 //crc2.strokeRect(0, 0, this.w, this.h);
                 crc2.shadowBlur = 15;
                 //crc2.shadowColor = "#81BEF7";
             } */
            InBetween.crc2.fillRect(0, 0, this.w, this.h);
            InBetween.crc2.scale(this.size, this.size);
            InBetween.crc2.restore();
            InBetween.crc2.closePath();
        }
        draw2() {
            InBetween.crc2.beginPath();
            InBetween.crc2.save();
            InBetween.crc2.translate(this.position.x, this.position.y);
            InBetween.crc2.rotate(this.r * Math.PI / 180);
            InBetween.crc2.translate(-this.w / 2, -this.h / 2);
            if (this.position.y <= 617) {
                InBetween.crc2.fillStyle = "#f2f2f2";
                InBetween.crc2.shadowBlur = 7;
                InBetween.crc2.shadowColor = "#f2f2f2";
            }
            if (this.position.y > 617) {
                InBetween.crc2.fillStyle = "#f2f2f2";
                InBetween.crc2.shadowBlur = 7;
                InBetween.crc2.shadowColor = "#f2f2f2";
                InBetween.crc2.globalAlpha = 0.1;
            }
            InBetween.crc2.shadowBlur = 16;
            InBetween.crc2.fillRect(0, 0, this.w, this.h);
            InBetween.crc2.scale(this.size, this.size);
            InBetween.crc2.restore();
            InBetween.crc2.closePath();
        }
    }
    InBetween.Rectangle = Rectangle;
})(InBetween || (InBetween = {}));
//# sourceMappingURL=Rectangle.js.map