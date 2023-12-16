
function displayTime(division : string) : void
{
    switch(division)
    {
        case "A" : 
        {
            console.log("Your exam is at 7AM");
            break;
        }
        
        case "B" : 
        {
            console.log("Your exam is at 8AM");
            break;
        }

        case "C" : 
        {
            console.log("Your exam is at 9AM");
            break;
        }

        case "D" : 
        {
            console.log("Your exam is at 10AM");
            break;
        }

        default : 
        {
            console.log("Wrong Input, It should be either A,B,C,D");
            break;
        }
    }
}

var value : string = "C";
displayTime(value);

/**   This is not a Output ===> Switch case works as per jump table thats 
 * Jump table 
 * 
 * case     Line No
 * A            6
 * B            12
 * C            18
 * D            24
 * default      30
 */



/**
 * Your exam is at 9AM
 */