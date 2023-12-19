function star(value : number)
{   
    var iCnt : number = 1;
    var jCnt : number = 0;
    let str = "";
    for (iCnt ; iCnt <= value; iCnt++ )
    {
        for(jCnt = 0; jCnt < value ; jCnt++ )
        {
            str+="* ";
        }
        str+="\n ";
    }

    console.log(str);

}

star(5);