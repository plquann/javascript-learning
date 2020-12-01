function calcDistance(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

document.getElementById("btnCalc").addEventListener("click", function(){
    var nameStu1 = document.getElementById("name1").value;
    var xStu1 = document.getElementById("x1").value;
    var yStu1 = document.getElementById("y1").value;

    var nameStu2 = document.getElementById("name2").value;
    var xStu2 = document.getElementById("x2").value;
    var yStu2 = document.getElementById("y2").value;

    var nameStu3 = document.getElementById("name3").value;
    var xStu3 = document.getElementById("x3").value;
    var yStu3 = document.getElementById("y3").value;

    var xSchool = document.getElementById("xSchool").value;
    var ySchool = document.getElementById("ySchool").value;

    var distanceStu1 = calcDistance(xStu1, yStu1, xSchool, ySchool);
    var distanceStu2 = calcDistance(xStu2, yStu2, xSchool, ySchool);
    var distanceStu3 = calcDistance(xStu3, yStu3, xSchool, ySchool);

   
    var maxDistance = "";
    distanceStu1 > distanceStu2 ? maxDistance = nameStu1 : maxDistance = nameStu2;
    maxDistance > distanceStu3 ? maxDistance : maxDistance = nameStu3;

    document.getElementById("result4").innerHTML = maxDistance;
})