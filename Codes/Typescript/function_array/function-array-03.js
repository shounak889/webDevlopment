function demo() {
    return new Array(10, 20, 30, 40, 90);
}
var ret = demo();
console.log("Elemets of array are  : ");
var i = 0;
for (i = 0; i < ret.length; i++) {
    console.log(ret[i]);
}
