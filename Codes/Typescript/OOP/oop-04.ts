class demo
{
    //characteristic 
    // there is no need to use "var" keywork inside class
    no1: number;
    no2: number;

    //Parametrized constructor 
    constructor(a : number, b : number)
    {
        console.log("Inside defalut constructor");
        this.no1=a;
        this.no2=b;
    }
    //Behaviour
    display()
    {
        console.log("Inside display function of demo class");
    }
}

var obj1 = new demo(10,11);
var obj2 = new demo(20,21);


console.log(obj1.no1);
console.log(obj1.no2);

console.log(obj2.no1);
console.log(obj2.no2);



/**
 * Inside defalut constructor
Inside defalut constructor
10
11
20
21
 */