/**
 * 5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains "Marvellous" word or not.
Input
Output
"Pune Kothrud Marvellous Infosystems"
String contains Marvellous in it.
 */

function chkString(s1: string, s2: string)
{

    if (s1.search(s2) == -1)
    {
        console.log("Not found");
        
    }
    else
    {
        console.log("String contains "+s2+" in it");
    }
}

var sentence : string = "Pune Kothrud Marvellous Infosystems";
var search : string = "Marvellous";

chkString(sentence,search);

/**String contains Marvellous in it */