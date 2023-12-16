/**
 * 2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
 */

class Circle
{
    radius : number;
    pi : number = 3.14;

    constructor(a : number)
    {
        this.radius = a;
        console.log("Radius is "+this.radius);
    }
    area():number
    {
        return (this.radius * this.pi);
    }

}
var area : number;

var ob1 = new Circle(10);
area = ob1.area();
console.log("area of circle is "+area);

var ob2 = new Circle(3);
area = ob2.area();
console.log("area of circle is "+area);


/**
 * Radius is 10
area of circle is 31.400000000000002
Radius is 3
area of circle is 9.42
 */