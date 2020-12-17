function findNum() {
    var sum = 0;

    for(var i = 1; ; i++){
        sum += i;
        if(sum > 10000)
            return i;
    }
}
document.querySelector("#btnEx1").addEventListener("click", function(){
    document.querySelector("#result1").innerHTML = "n = " + findNum();
});
