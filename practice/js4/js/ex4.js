const BillFee_Fam = 4.5;
const ServiceFee_Fam = 20.5;
const ChannelFee_Fam = 7.5;
const BillFee_Corp = 15;
const ServiceFee_Corp_1 = 75;
const ServiceFee_Corp_2 = 5;
const ChannelFee_Corp = 50;

var typeFam = document.getElementById("typeFam");
var typeCorp = document.getElementById("typeCorp");

typeFam.addEventListener("click", function(){
    document.getElementById("accounts").setAttribute("disabled", true);
})

typeCorp.addEventListener("click", function(){
    document.getElementById("accounts").removeAttribute("disabled");
})

function calcCableBill(type,service, channel){
    if(type === "family"){
        return BillFee_Fam + ServiceFee_Fam + channel*ChannelFee_Fam;
    }else if(type ==="corporate"){
        if (service <= 10){
            return BillFee_Corp + ServiceFee_Corp_1 + channel*ChannelFee_Corp; 
        }else{
            return BillFee_Corp + ServiceFee_Corp_1 + (service - 10)*ServiceFee_Corp_2 + channel*ChannelFee_Corp;
        }
    }
}

function checkSubscriptionType(){
    if(typeFam.checked){
        return "family";
    }else{
        return "corporate";
    }
}

document.getElementById("calcCable").addEventListener("click", function(){
    var account = parseFloat(document.getElementById("accounts").value);
    var channels = parseFloat(document.getElementById("channels").value);
    
    var type = checkSubscriptionType(typeFam, typeCorp);
    var totalBill = calcCableBill(type, account, channels);
    
    document.getElementById("cable").innerHTML = "Customer has to pay " + totalBill + "$ for Cable Bill.";
})