/**
 * 3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
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

class circleX extends Circle
{
    constructor(rad:number)
    {
        super(rad);
    }

    circumference() :number
    {
        return(2*this.pi * this.radius );
    }
}

var circum : number = 0;

var object1 = new circleX(5);
circum = object1.circumference();
console.log("Circumeferecne is "+circum);

var object2 = new circleX(15);
circum = object2.circumference();
console.log("Circumeferecne is "+circum);



/**
 * Radius is 5
Circumeferecne is 31.400000000000002
Radius is 15
Circumeferecne is 94.2
 */