const area_A = 2;
const area_B = 1;
const area_C = 0.5;
const subject_1 = 2.5;
const subject_2 = 1.5;
const subject_3 = 1;

function calcFinalPoint(point1st, point2nd, point3rd, priorityArea, prioritySubject) {
    var finalPoint = 0;

    finalPoint = point1st + point2nd + point3rd + priorityArea + prioritySubject;

    return finalPoint;
}

function checkPriorityArea(areaA, areaB, areaC){
    if(areaA.checked){
        return area_A;
    }else if(areaB.checked){
        return area_B;
    }else if (areaC.checked){
        return area_C;
    }else{
        return 0;
    }
}
function checkPrioritySubject(subject1, subject2, subject3){
    if(subject1.checked){
        return subject_1;
    }else if(subject2.checked){
        return subject_2;
    }else if (subject3.checked){
        return subject_3;
    }else{
        return 0;
    }
}
document.getElementById("calc").addEventListener("click", function () {
    var standardPoint = document.getElementById("standard").value;
    var point1st = parseFloat(document.getElementById("point1st").value);
    var point2nd = parseFloat(document.getElementById("point2nd").value);
    var point3rd = parseFloat(document.getElementById("point3rd").value);
    
    var areaA = document.getElementById("areaA");
    var areaB = document.getElementById("areaB");
    var areaC = document.getElementById("areaC");

    var subject1 = document.getElementById("subject1");
    var subject2 = document.getElementById("subject2");
    var subject3 = document.getElementById("subject3");
    
    var priorityArea = checkPriorityArea(areaA, areaB, areaC);
    var prioritySubject = checkPrioritySubject(subject1, subject2, subject3);

    var finalPoint = calcFinalPoint(point1st, point2nd, point3rd, priorityArea, prioritySubject);
    if(finalPoint >= standardPoint){
        document.getElementById("result1").innerHTML = "Congratulation! You have passed the university with " + finalPoint + " point.";
    }else{
        document.getElementById("result1").innerHTML = "Sorry! You have failed the university with " + finalPoint + " point.";
    }
})
