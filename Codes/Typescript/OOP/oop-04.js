var demo = /** @class */ (function () {
    //Parametrized constructor 
    function demo(a, b) {
        console.log("Inside defalut constructor");
        this.no1 = a;
        this.no2 = b;
    }
    //Behaviour
    demo.prototype.display = function () {
        console.log("Inside display function of demo class");
    };
    return demo;
}());
var obj1 = new demo(10, 11);
var obj2 = new demo(20, 21);
console.log(obj1.no1);
console.log(obj1.no2);
console.log(obj2.no1);
console.log(obj2.no2);
