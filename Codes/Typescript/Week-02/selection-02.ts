
function checkEven(no : number) : boolean
{
    if((no % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var value : number = 11 ;

var result : boolean;

result = checkEven(value);

if(result == true)
{
    console.log("It is even");
}
else
{
    console.log("It is odd");
}
