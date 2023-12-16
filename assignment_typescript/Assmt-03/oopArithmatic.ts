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

class arithmetic{
    number1 : number = 0;
    number2 : number = 0;

    constructor(a : number , b: number)
    {
        this.number1 = a;
        this.number2 = b;
        console.log("The given numbers are:"+a+" & "+b);
    }


    result : number = 0; 
    addition():number 
    {   
        this.result = this.number1 + this.number2;
        return this.result;    
    }

    subtraction():number 
    {   
        this.result = this.number1 - this.number2;
        return this.result;    
    }

    multiplication():number 
    {   
        this.result = this.number1 * this.number2;
        return this.result;    
    }

    division():number 
    {   
        this.result = this.number1 / this.number2;
        return this.result;    
    }
}




var result : number;
var obj1 = new arithmetic(20,10);
result = obj1.addition();
console.log("Addition is "+result);
result = obj1.subtraction();
console.log("subtraction is "+result);
result = obj1.multiplication();
console.log("multiplication is "+result);
result = obj1.division();
console.log("division is "+result);

var obj2 = new arithmetic(50,3);
result = obj2.addition();
console.log("Addition is "+result);
result = obj2.subtraction();
console.log("subtraction is "+result);
result = obj2.multiplication();
console.log("multiplication is "+result);
result = obj2.division();
console.log("division is "+result);


/**
 * The given numbers are:20 & 10
Addition is 30
subtraction is 10
multiplication is 200
division is 2
The given numbers are:50 & 3
Addition is 53
subtraction is 47
multiplication is 150
division is 16.666666666666668
 */