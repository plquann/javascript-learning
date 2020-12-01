/**
 * Exercise 3: 
 * Block 1: Users input three numbers
 * 
 * Block 2:
 *  Step1: Catch the event of button for start calculate
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Declare even and odd variables to assigns that value after calculated
 *  Step4: Check that what kind of the numbers. If the number is even numbers, increasing even++. Else increasing odd++
 *  Step5: Show result for users
 * 
 * Block3: Amount even and odd numbers
 */
function isEven(num){
    return (num%2 === 0);
}
document.getElementById("btnCalc").addEventListener("click", function () {
    var numA = document.getElementById("numA").value;
    var numB = document.getElementById("numB").value;
    var numC = document.getElementById("numC").value;
    var even = 0;
    var odd = 0;

    isEven(numA) ? even++ : odd++;
    isEven(numB) ? even++ : odd++;
    isEven(numC) ? even++ : odd++;

    document.getElementById("even").innerHTML = even;
    document.getElementById("odd").innerHTML = odd;
})