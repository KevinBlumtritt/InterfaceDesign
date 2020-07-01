namespace InBetween {
    export class Rectangle {
        position: Vector;
        size: number;
        /* x: number = 20;
        y: number = 637; */
        w: number = 80;
        h: number = 20;
        r: number = 0;
        isHit: boolean = false;


        constructor(_size: number, _position: Vector) {

            this.position = _position;
            this.size = _size;

        }

        draw(): void {


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.r * Math.PI / 180);
            crc2.translate(-this.w / 2, -this.h / 2);

            if (this.position.y <= 617 && rectanglehover == true) {
                crc2.fillStyle = "#f2f2f2";
                crc2.shadowBlur = 14;
                crc2.shadowColor = "#f2f2f2";
            }

            if (this.position.y <= 617 && rectanglehover == false) {
                crc2.fillStyle = "#f2f2f2";
                crc2.shadowBlur = 7;
                crc2.shadowColor = "#f2f2f2";
            }

            if (this.position.y > 617) {
                crc2.fillStyle = "#f2f2f2";
                crc2.shadowBlur = 7;
                crc2.shadowColor = "#f2f2f2";
                crc2.globalAlpha = 0.2;
            }


            /*if (rectangleDragged == true) {
 
                 //crc2.strokeStyle = "#81BEF7";
                 //crc2.lineWidth = 5;
                 //crc2.strokeRect(0, 0, this.w, this.h); 
                 crc2.shadowBlur = 15;
                 //crc2.shadowColor = "#81BEF7";
             } */

            crc2.fillRect(0, 0, this.w, this.h);
            crc2.scale(this.size, this.size);
            crc2.restore();
            crc2.closePath();

        }

        draw2(): void {


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.r * Math.PI / 180);
            crc2.translate(-this.w / 2, -this.h / 2);

            if (this.position.y <= 617) {
                crc2.fillStyle = "#f2f2f2";
                crc2.shadowBlur = 7;
                crc2.shadowColor = "#f2f2f2";
            }
            
            if (this.position.y > 617) {
                crc2.fillStyle = "#f2f2f2";
                crc2.shadowBlur = 7;
                crc2.shadowColor = "#f2f2f2";
                crc2.globalAlpha = 0.1;
            }

            crc2.shadowBlur = 16;
            crc2.fillRect(0, 0, this.w, this.h);
            crc2.scale(this.size, this.size);
            crc2.restore();
            crc2.closePath();

        }

    }
}