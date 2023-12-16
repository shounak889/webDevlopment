class demo
{
    //characteristic 
    // there is no need to use "var" keywork inside class
    no1: number;
    no2: number;

    //Behaviour
    display()
    {
        console.log("Inside display function of demo class");
    }
}

var obj = new demo();

obj.display();

/**
 * Inside display function of demo class
 */