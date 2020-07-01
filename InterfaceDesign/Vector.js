"use strict";
var InBetween;
(function (InBetween) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        static getDifference(_v1, _v2) {
            return new Vector(_v1.x - _v2.x, _v1.y - _v2.y);
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
    }
    InBetween.Vector = Vector;
})(InBetween || (InBetween = {}));
//# sourceMappingURL=Vector.js.map