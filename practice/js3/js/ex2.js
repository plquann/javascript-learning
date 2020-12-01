/**
 * Exercise 2:
 * Block 1: User select name of family's member
 * 
 * Block 2:
 *  Step1: Catch the event of button for start
 *  Step2: Declare variables and assigns the value that the user input
 *  Step3: Using if-else to compare that value which was select
 *  Step4: Show result for users
 * 
 * Block3: Say hello
 */
document.getElementById("btnHello"),addEventListener("click", function(){
    var name = document.getElementById("selectMem").value;
    var result = document.getElementById("result2");
    if(name === "Father"){
        result.innerHTML = "Hello Father";
    }else if(name === "Mother"){
        result.innerHTML = "Hello Mother";
    }else if(name === "Brother"){
        result.innerHTML = "Hello Brother";
    }else if(name === "Sister"){
        result.innerHTML = "Hello Sister";
    }
});