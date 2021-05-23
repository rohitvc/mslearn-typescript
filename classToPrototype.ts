class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}

class Pointer extends Point {
    z: string
    constructor(x: number, y:number, z: string) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.z = z;
    }

    addString() {
        console.log(this.z);
        return this.x + this.y
    }
}

const abc = new Point(10,20)
console.log(abc.add())

// This class converts to Prototype inheritance something like this,

// "use strict";
// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var Point = /** @class */ (function () {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     Point.prototype.add = function () {
//         return this.x + this.y;
//     };
//     return Point;
// }());
// var Pointer = /** @class */ (function (_super) {
//     __extends(Pointer, _super);
//     function Pointer(x, y, z) {
//         var _this = _super.call(this, x, y) || this;
//         _this.x = x;
//         _this.y = y;
//         _this.z = z;
//         return _this;
//     }
//     Pointer.prototype.addString = function () {
//         console.log(this.z);
//         return this.x + this.y;
//     };
//     return Pointer;
// }(Point));
// var abc = new Point(10, 20);
// console.log(abc.add());