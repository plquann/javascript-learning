function isPrime(num) {
    if (num <= 1)
        return false;

    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false;
    }

    return true;
}

document.querySelector("#btnEx5").addEventListener("click", function(){
    var num = Number(document.querySelector("#number").value) ;

    var result = "";
    for(var i = 2; i <= num ; i++){
        if(isPrime(i))
            result += i + " ";
    }

    document.querySelector("#result5").innerHTML = result;
})