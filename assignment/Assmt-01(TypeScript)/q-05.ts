/**
 * 5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
21

Input :  21
Output: 1  1   2  3  5   8  13  21
 */

function Fibonacci(val : number)
{
    var n1 : number = 1;
    var n2 : number = 0;
    var ans : number = 0;
    while(n2 < val)
    {   
        if(n1 == 0)
        {
            
        }
        else
        {
            console.log(n2);
        }
        ans = n1 + n2;
        n2 = n1;
        n1 = ans;

    }
}

var num : number = 21;

Fibonacci(num);

/**
 * 0
1
1
2
3
5
8
13
 */