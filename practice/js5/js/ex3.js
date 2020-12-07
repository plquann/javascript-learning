function calcFactorial(n) {
    var result = 1;

    for (var i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

document.querySelector("#btnEx3").addEventListener("click", function(){
    var num = Number(document.querySelector("#num").value) ;

    document.querySelector("#result3").innerHTML = "S = " + calcFactorial(num);
})