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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('The Car has Started driving' + this.model);
    };
    Car.prototype.stop = function () {
        console.log('The car has stopped' + this.year);
    };
    return Car;
}());
var c1 = new Car();
var c2 = new Car();
c1.model = "Tata";
c1.year = 2023;
c1.price = "323131";
c2.model = "Mahindrs";
c2.year = 2024;
c2.price = "43535";
c1.drive();
c2.drive();
c1.stop();
c2.stop();
var superCar = /** @class */ (function (_super) {
    __extends(superCar, _super);
    function superCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    superCar.prototype.feat1 = function () {
        console.log("Car top speed is" + this.topSpeed);
    };
    superCar.prototype.feat2 = function () {
        console.log("Do car has ABS " + this.abs);
    };
    return superCar;
}(Car));
var c3 = new superCar();
c3.model = "Gt";
c3.price = "313113131";
c3.year = 3023;
c3.topSpeed = "230KM";
c3.abs = true;
c3.drive();
c3.stop();
c3.feat1();
c3.feat2();
