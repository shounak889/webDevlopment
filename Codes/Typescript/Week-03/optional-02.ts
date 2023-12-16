function display( no : number , value ? : number) : void
{
    console.log(no);
    if(value != undefined)
    {
        console.log(value);
    }   
}

display(11,21);
display(11);