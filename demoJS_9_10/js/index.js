function handleConfirm() {
    var code = document.getElementById("codeStudent").value;
    var name = document.getElementById("nameStudent").value;
    var type = document.getElementById("typeStudent").value;
    var math = +document.getElementById("pointMath").value;
    var phy = +document.getElementById("pointPhy").value;
    var chem = +document.getElementById("pointChem").value;
    var morality = +document.getElementById("pointMorality").value;

    // var student = {
    //     //attribute
    //     txtNameStu: name,
    //     txtCodeStu: code,
    //     txtTypeStu: type,
    //     math: math,
    //     physical: phy,
    //     chemistry: chem,
    //     morality: morality,
        
    //     //method
    //     calcAverage : function(){
    //         return (student.math + student.physical + student.chemistry + student.morality)/4;
    //     },
    //     ranking: function(point){
    //         if(point >= 8 && point <= 10){
    //             return "Excellent!";
    //         }else if(point >= 6.5 && point < 8){
    //             return "Good!";
    //         }else if(point >= 5 && point < 6.5){
    //             return "Medium!";
    //         }else{
    //             return "Failed!";
    //         }  
    //     },
    // };
    var student = new Student(code, name, type, math, phy, chem, morality);
    

    document.getElementById("txtNameStu").innerHTML = student.txtNameStu;
    document.getElementById("txtCodeStu").innerHTML = student.txtCodeStu;
    document.getElementById("txtTypeStu").innerHTML = student.txtTypeStu;
    document.getElementById("txtAverage").innerHTML = student.calcAverage();
    document.getElementById("txtRank").innerHTML = student.ranking(student.calcAverage());

}
document.getElementById("btnConfirm").addEventListener("click", handleConfirm);