console.log(8 < 15);
console.log(8 == 15);

var num = 0;
console.log(0 <= num && num < 100);
console.log(0 <= num || num == 100);
var isLogin = true;
console.log(!isLogin);

var d = -1;
if (d < 0) {
    d *= (-1);
    // d = Math.abs(d);
}
console.log(d);

var creditCardBalance = 10000;
var payment = 2000;
var balance = 0;
var penalty = 0;

balance = creditCardBalance - payment;
if (balance > 0) {
    penalty = balance * 1.5 / 100;
}
console.log("penalty = " + penalty);

var num1 = 3;
var num2 = 2;
if (num1 > num2) {
    console.log("bigger = " + num1);
} else {
    console.log("bigger = " + num2);
}

var hour = 48;
var pay = 3000;
var totalSalary = 0;
var rate = 1.5;
if (hour > 40) {
    totalSalary = 40 * pay + rate * pay * (hour - 40);
}
else {
    totalSalary = 40 * pay;
}
console.log("Total Salary = " + totalSalary.toLocaleString());

(8 > 15) ? console.log("true") : console.log("false");

document.getElementById("btnTinhTien").addEventListener("click", function () {
    var name = document.getElementById("tenMH").value;
    var amount = document.getElementById("soLuongMH").value;
    var price = document.getElementById("donGia").value;
    var total = 0;

    if (amount < 50) {
        total = price * amount;
    }
    else if (amount >= 50 && amount < 100) {
        total = price * 49 + price * (amount - 49) * 0.92;
    }
    else if (amount >= 100) {
        total = price * 49 + price * 0.92 * 50 + price * 0.88 * (amount - 99);
    }
    else {
        alert("Số lượng sai rồi. Nhập lại!");
    }
    document.getElementById("total").innerHTML = total;
});

document.getElementById("btnXepLoai").addEventListener("click", function () {
    var name = document.getElementById("tenHS").value;
    var toan =parseFloat(document.getElementById("toan").value);
    var hoa =parseFloat(document.getElementById("hoa").value);
    var ly =parseFloat(document.getElementById("ly").value);
    var averages = (toan + ly + hoa) / 3;

    if (averages >= 8.5 && averages <= 10)
        document.getElementById("xepLoai").innerHTML = "Giỏi";
    else if (averages >= 6.5 && averages <= 8.5)
        document.getElementById("xepLoai").innerHTML = "Khá";
    else if (averages >= 5 && averages <= 6.5)
        document.getElementById("xepLoai").innerHTML = "Trung Bình";
    else if (averages < 5)
        document.getElementById("xepLoai").innerHTML = "Yếu";
    else if(averages < 0 || averages > 10)
        alert("Nhập sai rồi! Nhập lại đi!");
});

