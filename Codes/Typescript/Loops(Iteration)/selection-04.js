function displayTime(division) {
    switch (division) {
        case "A":
            {
                console.log("Your exam is at 7AM");
                break;
            }
        case "B":
            {
                console.log("Your exam is at 8AM");
                break;
            }
        case "C":
            {
                console.log("Your exam is at 9AM");
                break;
            }
        case "D":
            {
                console.log("Your exam is at 10AM");
                break;
            }
        default:
            {
                console.log("Wrong Input, It should be either A,B,C,D");
                break;
            }
    }
}
var value = "C";
displayTime(value);
