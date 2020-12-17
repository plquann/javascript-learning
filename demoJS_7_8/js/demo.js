/**
 * Demo
 */
function tryPress() {
    var listLiTag = document.getElementsByTagName("li");
    console.log(listLiTag);

    listLiTag[0].style.backgroundColor = "red";
    listLiTag[1].style.backgroundColor = "pink";

}
document.getElementById("btnTryPress").onclick = tryPress;

function tryPress1() {
    var listClass = document.getElementsByClassName("alert");
    console.log(listClass);
    listClass[0].innerHTML = "Changed!";
}
document.getElementById("btnTryPress1").onclick = tryPress1;

function tryPress2() {
    var listChildClass = document.querySelector(".content1 .alert");
    console.log(listChildClass);

    var listChildClass1 = document.querySelectorAll(".content1 .alert");
    console.log(listChildClass1);
}
document.querySelector("#btnTryPress2").onclick = tryPress2;

/**
 * demo array
 */

var arrPhone = ["iPhone", "samsung", "oppo"];
var arrAge = [1, 2, 3, 4, 5, 6];
var arrInfo = ["Nguyen Thi Khach Hang", 20, "CNV"];

console.log(arrPhone[0]);
var lenPhone = arrPhone.length;
console.log(arrPhone[lenPhone - 1]);

for (var i = 0; i < arrInfo.length; i++) {
    console.log(arrInfo[i]);
}
var arrNum = [];
function inputNumber() {
    var num = Number(document.querySelector("#inputNum").value);

    arrNum.push(num);
    console.log(arrNum);
}
document.querySelector("#btnAdd").onclick = inputNumber;

function calcSumEven() {
    var sum = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            sum += arrNum[i];
        }
    }

    document.querySelector("#txtSum").innerHTML = sum;
}
document.querySelector("#btnSum").onclick = calcSumEven;

function countOddNumber(){
    var count = 0;

    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] <= 0) {
            count++;
        }
    }
    document.querySelector("#txtOdd").innerHTML = count;
}
document.querySelector("#btnOdd").onclick = countOddNumber;

function sumOddNumber(){
    var sum = 0;

    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] <= 0) {
            sum += arrNum[i];
        }
    }
    document.querySelector("#txtSumOdd").innerHTML = sum;
}
document.querySelector("#btnSumOdd").onclick = sumOddNumber;

/**
 * declare function
 * function expression (literal function)
 * 
 */

 var funcInfo = function(){
     console.log("msg");
 }