document.getElementById("btnCalc").onclick = function(){
    var num = document.getElementById("num").value;
    var count = 0;
    
    while(num > 1){
        num = Math.floor(num / 2);
        count++;
        console.log("Count" + count + "- num" + num);
    }
}
document.getElementById("btnCalc2").onclick = function(){
    var num = document.getElementById("num2").value;
    var count = 0;
    
    do{
        num = Math.floor(num / 2);
        count++;
        console.log("Count" + count + "- num" + num);
    }while(num > 1);
}
var content = "";
for(var i = 0; i < 5 ; i++){
    content += "* ";
}
console.log(content);

var content2= "";
for(var i = 0; i < 5 ; i++){
    for (var j = 0; j < 5; j++){
        content2 += "* ";
    }
    content2 += "\n";
}
console.log(content2);
