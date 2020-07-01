"use strict";
var InBetween;
(function (InBetween) {
    class Square {
        constructor(_size, _position) {
            /*x: number = 100;
            y: number = 637;*/
            this.w = 65;
            this.h = 65;
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
            if (this.position.y <= 617) {
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
                InBetween.crc2.globalAlpha = 0.2;
            }
            InBetween.crc2.shadowBlur = 17;
            InBetween.crc2.fillRect(0, 0, this.w, this.h);
            InBetween.crc2.scale(this.size, this.size);
            InBetween.crc2.restore();
            InBetween.crc2.closePath();
        }
    }
    InBetween.Square = Square;
})(InBetween || (InBetween = {}));
//# sourceMappingURL=Square.js.map