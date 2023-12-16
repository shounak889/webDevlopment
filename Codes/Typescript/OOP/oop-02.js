var demo = /** @class */ (function () {
    function demo() {
    }
    //Behaviour
    demo.prototype.display = function () {
        console.log("Inside display function of demo class");
    };
    return demo;
}());
var obj = new demo();
obj.display();
