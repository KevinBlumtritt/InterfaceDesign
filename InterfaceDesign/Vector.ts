namespace InBetween{
    export class Vector {
        public x: number;
        public y: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        } 

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        static getDifference(_v1: Vector, _v2: Vector): Vector {
            return new Vector(_v1.x - _v2.x, _v1.y - _v2.y);
        }

        get length(): number{
            return Math.hypot(this.x, this.y);
        }
    }
}