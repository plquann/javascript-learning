/**
 * Exercise 4:
 * Block 1: User Input lengths of sides 
 * 
 * Block 2:
 *  Step1: Catch the event of button for start calculate
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Check the valid of the value. If value is invalid, give a message that request user re-input
 *  Step4: Using if-else to check conditions of triangle
 *  Step5: Show result for users
 * 
 * Block3: Types of triangle
 */
function isTriangle(a, b, c){
    return (Math.abs(b-c) < a  && a < (b+c) );
}
document.getElementById("btnTypes").addEventListener("click", function () {
    var length1 = Number(document.getElementById("length1").value);
    var length2 = Number(document.getElementById("length2").value);
    var length3 = Number(document.getElementById("length3").value);
    var type  = "";
    
    var powL1 = Math.pow(length1, 2);
    var powL2 = Math.pow(length2, 2);
    var powL3 = Math.pow(length3, 2);

    if(!isTriangle(length1,length2,length3)){
        alert("Not a Triangle! Input again!");
        type = "none";
    }else{
        if( length1 === length2 && length2 === length3){
            type = "Equilateral triangle";
        }else if( length1 === length2 || length2 === length3 || length1 === length3){
            type = "Isosceles triangle";
        }else if(powL1 === powL2+powL3 || powL2 === powL1+powL3 || powL3 === powL1 + powL2){
            type = "Right triangle ";
        }else{
            type = "Scalene triangle";
        }
    }

    document.getElementById("result4").innerHTML = type;
});