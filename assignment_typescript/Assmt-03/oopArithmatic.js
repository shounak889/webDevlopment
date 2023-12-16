/**
 * 1. Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction,
Multiplication and Division.
Addition method will add Number1, Number2 & return result.
Subtraction method will subtract Number1, Number2 & return result.
Multiplication method will multiply Number1, Number2 & return result.
Division method will divide Number1, Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.
 */
var arithmetic = /** @class */ (function () {
    function arithmetic(a, b) {
        this.number1 = 0;
        this.number2 = 0;
        this.result = 0;
        this.number1 = a;
        this.number2 = b;
        console.log("The given numbers are:" + a + " & " + b);
    }
    arithmetic.prototype.addition = function () {
        this.result = this.number1 + this.number2;
        return this.result;
    };
    arithmetic.prototype.subtraction = function () {
        this.result = this.number1 - this.number2;
        return this.result;
    };
    arithmetic.prototype.multiplication = function () {
        this.result = this.number1 * this.number2;
        return this.result;
    };
    arithmetic.prototype.division = function () {
        this.result = this.number1 / this.number2;
        return this.result;
    };
    return arithmetic;
}());
var result;
var obj1 = new arithmetic(20, 10);
result = obj1.addition();
console.log("Addition is " + result);
result = obj1.subtraction();
console.log("subtraction is " + result);
result = obj1.multiplication();
console.log("multiplication is " + result);
result = obj1.division();
console.log("division is " + result);
var obj2 = new arithmetic(50, 3);
result = obj2.addition();
console.log("Addition is " + result);
result = obj2.subtraction();
console.log("subtraction is " + result);
result = obj2.multiplication();
console.log("multiplication is " + result);
result = obj2.division();
console.log("division is " + result);
