class demo
{
    //characteristic 
    // there is no need to use "var" keywork inside class
    no1: number;
    no2: number;

    //default constructor 
    constructor()
    {
        console.log("Inside defalut constructor");
        this.no1=0;
        this.no2=0;
    }
    //Behaviour
    display()
    {
        console.log("Inside display function of demo class");
    }
}

var obj = new demo();

obj.display();
console.log(obj.no1);
console.log(obj.no2);

/**
 * Inside defalut constructor
Inside display function of demo class
0
0
 */