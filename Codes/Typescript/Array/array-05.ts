
var marks: number[] = [11,21,51,101,111];

var i : number = 0;

console.log("array traversal using for loop");

for(i = 0 ; i < marks.length ; i++)
{
    console.log(marks[i]);
}

console.log("array traversal using While");

i = 0;
while(i < marks.length)
{
    console.log(marks[i]);
    i++;
}

console.log("array traversal using do While");

i = 0;
do
{
    console.log(marks[i]);
    i++;
}while(i < marks.length)


/**
 * array traversal using for loop
11
21
51
101
111
array traversal using While
11
21
51
101
111
array traversal using do While
11
21
51
101
111

 */