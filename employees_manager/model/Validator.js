function Validator(){
    this.checkNull = function (value, idNotify){
        if(value.trim() === ""){
            document.getElementById(idNotify).innerHTML = "Do not null!";
            document.getElementById(idNotify).style.display = "block";
            return false;
        }else{
            document.getElementById(idNotify).innerHTML = "";
            document.getElementById(idNotify).style.display = "none";
            return true;
        }
    };

    this.checkNumber = function(value, idNotify){
        if(!value.match(/^[0-9]+$/)){
            document.getElementById(idNotify).innerHTML = "Mã số nhân viên must be number!";
            document.getElementById(idNotify).style.display = "block";
            return false;
        }else{
            document.getElementById(idNotify).innerHTML = "";
            document.getElementById(idNotify).style.display = "none";
            return true;
        }
    };

    this.checkLength = function(value, idNotify, min, max){
        if(!(value.length >= min && value.length <= max)){
            document.getElementById(idNotify).innerHTML = `Mã số nhân viên must be ${min} to ${max} in length!`;
            document.getElementById(idNotify).style.display = "block";
            return false;
        }else{
            document.getElementById(idNotify).innerHTML = "";
            document.getElementById(idNotify).style.display = "none";
            return true;
        }
    };

    this.checkEmail = function(value, ididNotify){
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(!value.match(pattern){
            document.getElementById(idNotify).innerHTML = "Email is invalid!";
            document.getElementById(idNotify).style.display = "block";
            return false;
        }else{
            document.getElementById(idNotify).innerHTML = "";
            document.getElementById(idNotify).style.display = "none";
            return true;
        }

    }   
}