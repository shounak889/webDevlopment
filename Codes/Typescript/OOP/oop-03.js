var demo = /** @class */ (function () {
    function demo() {
        console.log("Inside defalut constructor");
        this.no1 = 0;
        this.no2 = 0;
    }
    //Behaviour
    demo.prototype.display = function () {
        console.log("Inside display function of demo class");
    };
    return demo;
}());
var obj = new demo();
obj.display();
console.log(obj.no1);
console.log(obj.no2);
