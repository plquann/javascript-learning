var txtCode = document.getElementById("txtCode");
var btnButton = document.getElementById("btnButton");
var btnDisabled = document.getElementById("btnDisabled");

btnDisabled.addEventListener("click", function(){
    //Way 1
    txtCode.disabled = "true";
    //Way 2
    btnButton.setAttribute("disabled", true);
});

document.getElementById("btnDel").addEventListener("click", function(){
    txtCode.removeAttribute("disabled");
    btnButton.removeAttribute("disabled");
});


document.getElementById("login").addEventListener("click", function(event){
    //Event Available of element
    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    document.getElementById("mesLogin").innerHTML = "User Name: "+ userName +"<br> Password: " + password;
    document.getElementById("mesLogin").style.backgroundColor = "grey";
    document.getElementById("mesLogin").style.color = "black";

});


document.getElementById("btnCalc").addEventListener("click", function(){
    var billTotal = document.getElementById("inputBillTotal").value;
    var percentTip = document.getElementById("selectTip").value;
    var numPeople = document.getElementById("inputPeople").value;

    var sumTip = billTotal*percentTip/100;
    var tipPerPeople = sumTip/numPeople;

    document.getElementById("tipMessenger").innerHTML = "TIP AMOUNT <br><span style='vertical-align: super;'>$</span>" + tipPerPeople + "<br> per people";
});