function star(value) {
    var iCnt = 1;
    var jCnt = 0;
    var str = "";
    for (iCnt; iCnt <= value; iCnt++) {
        for (jCnt = 0; jCnt < value; jCnt++) {
            str += "* ";
        }
        str += "\n ";
    }
    console.log(str);
}
star(5);
