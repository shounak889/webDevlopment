var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
 */
var Circle = /** @class */ (function () {
    function Circle(a) {
        this.pi = 3.14;
        this.radius = a;
        console.log("Radius is " + this.radius);
    }
    Circle.prototype.area = function () {
        return (this.radius * this.pi);
    };
    return Circle;
}());
var circleX = /** @class */ (function (_super) {
    __extends(circleX, _super);
    function circleX(rad) {
        return _super.call(this, rad) || this;
    }
    circleX.prototype.circumference = function () {
        return (2 * this.pi * this.radius);
    };
    return circleX;
}(Circle));
var circum = 0;
var object1 = new circleX(5);
circum = object1.circumference();
console.log("Circumeferecne is " + circum);
var object2 = new circleX(15);
circum = object2.circumference();
console.log("Circumeferecne is " + circum);
