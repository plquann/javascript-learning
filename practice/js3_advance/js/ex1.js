var day = 0;
var month = 0;
var year = 0;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September ', ' October', 'November', 'December'];

function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0);
};
function dayOfMonth(month, year) {
    var num = 0;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            num = 31;
            break;
        case 4: case 6: case 9: case 11:
            num = 30;
            break;
        case 2:
            if (isLeapYear(year)) {
                num = 29;
            } else {
                num = 28;
            }
            break;
        default:
            alert("Month is invalid!");
    }
    return num;
};
document.getElementById("btnNextDay").addEventListener("click", function () {
    day = Number(document.getElementById("day").value);
    month = Number(document.getElementById("month").value);
    year = Number(document.getElementById("year").value);

    day++;
    if (day > dayOfMonth(month, year)) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    document.getElementById("result1").innerHTML = "Next Day is:&nbsp;" + months[month - 1] + "&nbsp;" + day + ",&nbsp;" + year;
});
document.getElementById("btnPrevDay").addEventListener("click", function () {
    day = Number(document.getElementById("day").value);
    month = Number(document.getElementById("month").value);
    year = Number(document.getElementById("year").value);

    day--;
    if (day === 0) {
        month--;
        if (month === 0) {
            year--;
            month = 12;
        }
        day = dayOfMonth(month, year);
    }
    document.getElementById("result1").innerHTML = "Prev Day is:&nbsp;" + months[month - 1] + "&nbsp;" + day + ",&nbsp;" + year;
});