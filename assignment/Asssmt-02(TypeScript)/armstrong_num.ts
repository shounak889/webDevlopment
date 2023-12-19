/**
 * 
 * 4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.

Input :
153
Output:
It is Armstrong number
 */

function chkArmstrong(num: number)
{
    var n1 : string = num.toString();
    var total : number = n1.length;
    var len: number = total;
   //console.log(total);
    var sum : number = 0;
   // console.log(n1);
    while(total > 0 )
    {
     
        --total;
      //  console.log( (Number(n1.charAt(total))));
       // var nn: number = (Number(n1.charAt(total)));
        sum += Math.pow((Number(n1.charAt(total))),len);
       // console.log(Math.pow((Number(n1.charAt(total))),len));
       
        
    }
    console.log(sum);
      if(sum == num)
    {   
        console.log("It is a Armstrong number");

    }
    else
    {
        console.log("Not Arm");
    }
    

}

/**
 * 153
It is a Armstrong number
 */




chkArmstrong(153);
//console.log(Math.pow(10,2));