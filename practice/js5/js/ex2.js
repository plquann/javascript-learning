function calcSum(x, n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }

    return sum;
}

document.querySelector("#btnEx2").addEventListener("click", function(){
    var x = Number(document.querySelector("#x").value);
    var n = Number(document.querySelector("#n").value);

    document.querySelector("#result2").innerHTML = "S = " + calcSum(x, n);
})