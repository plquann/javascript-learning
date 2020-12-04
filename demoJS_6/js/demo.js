document.getElementById("btnCalc").onclick = function () {
    var num = document.getElementById("num").value;
    var count = 0;

    while (num > 1) {
        num = Math.floor(num / 2);
        count++;
        console.log("Count" + count + "- num" + num);
    }
}
document.getElementById("btnCalc2").onclick = function () {
    var num = document.getElementById("num2").value;
    var count = 0;

    do {
        num = Math.floor(num / 2);
        count++;
        console.log("Count" + count + "- num" + num);
    } while (num > 1);
}
var content = "";
for (var i = 0; i < 5; i++) {
    content += "* ";
}
console.log(content);

var content2 = "";
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        content2 += "* ";
    }
    content2 += "\n";
}
console.log(content2);
/**
 * Demo Even/Odd Number
 */

function printNumber() {
    var evenList = "";
    var oddList = "";
    var count = 0;

    // while (count < 100) {
    //     if (count % 2 === 0) {
    //         evenList += count + " ";
    //     } else {
    //         oddList += count + " ";
    //     }
    //     count++;
    // }
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            evenList += i + " ";
        } else {
            oddList += i + " ";
        }
    }

    document.getElementById("txtEvenOdd").innerHTML = "Even Number : " + evenList + "<br>" + "Odd Number: " + oddList;
}
document.getElementById("btnResult").onclick = printNumber;

function sumEven(){
    var num = document.getElementById("n").value;
    var sum = 0;
    var count = 1;

    // while(count <= num){
    //     if(count % 2 === 0){
    //         sum += count;
    //     }
    //     count++;
    // }

    for(var i = 1 ; i <= num ; i++ ){
        if(i % 2 === 0){
            sum += i;
        }
    }

    document.getElementById("txtSum").innerHTML = "Sum of even number from 1 to " + num + " = " + sum;
}
document.getElementById("btnResult1").onclick = sumEven;