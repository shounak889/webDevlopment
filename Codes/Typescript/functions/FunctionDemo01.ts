function Addition(Value1 : number, Value2: number) : number
{
    var Result : number = 0;    //local variables
    Result = Value1 + Value2 ;
    return Result;              //returning 
}

//gloabal varibales 
var No1 : number = 11 ;
var No2 : number = 10 ;
var Ans : number = 0;

Ans = Addition(No1, No2);       // function call

console.log("addition is : "+Ans);