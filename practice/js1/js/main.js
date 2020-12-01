/**
 * Exercise 4: 3 block module
 * Block 1: User input length and width of rectangle
 * 
 * Block 2:
 *  Step1: Catch the event of button for start calculate
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Check the valid of the value. If value is invalid, give a message that request user re-input
 *  Step4: Calculate using the area and perimeter formula of rectangle
 *         area = length*width ; perimeter = (length + width)*2
 *  Step5: Show result for users
 * 
 * Block3: Area anf perimeter of rectangle
 */
document.getElementById("btnCalc").onclick = function () {
    var length = Number(document.getElementById("length").value);
    var width =  Number(document.getElementById("width").value);
    if(length <= 0 || width <= 0){
        alert("Invalid input! Please input positive numbers!");
    }else{
        document.getElementById("area").innerHTML = length*width;
        document.getElementById("perimeter").innerHTML = (length + width)*2;
    }
}
/**
 * Exercise 5: 3 block module
 * Block 1: User input number that need calculate digits sum
 * 
 * Block 2:
 *  Step1: Catch the event of button for start calculate
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Check the valid of the value. If value is positive number, converts to 
           negative numbers
    Step4: Using do-while loop to get unit step-by-step and plus to sum
           unit = num % 10; sum += unit
 *  Step5: Show result for users
 * 
 * Block3: Sum of digits
 */
document.getElementById("btnCalcDigit").onclick = function () {
    var num = Number(document.getElementById("num").value);
    var sum = 0;
    var unit = 0;
    if(num < 0){
        num *= (-1);
    }
    do{
        unit = num % 10;
        sum += unit;
        num =  Math.floor(num/10); 
    }while(num > 0);

    document.getElementById("sumDigit").innerHTML = sum;
}