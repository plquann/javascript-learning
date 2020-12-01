/**
 * Exercise 1: 
 * Block 1: Users input three numbers
 * 
 * Block 2:
 *  Step1: Catch the event of button for start calculate
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Declare max and min variables to assigns that value after calculated
 *  Step4: Using if-else to find max and min of two numbers after comparing the third number with max and min
 *  Step5: Show result for users
 * 
 * Block3: Three numbers have been sorted
 */
document.getElementById("btnSort").addEventListener("click", function () {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var min = 0;
    var max = 0;

    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }

    if (num3 > max) {
        max = num3;
    } else if (num3 < min) {
        min = num3;
    }

    document.getElementById("result1").innerHTML = min + "&nbsp;&nbsp;&nbsp;" + (num1+num2+num3-min-max) + "&nbsp; &nbsp;&nbsp;" + max;
});