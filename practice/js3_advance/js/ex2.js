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
document.getElementById("btnDay").addEventListener("click", function () {
    var month = Number(document.getElementById("monthDay").value);
    var year = Number(document.getElementById("yearDay").value);

    var day = dayOfMonth(month, year);

    document.getElementById("result2").innerHTML = day;
});