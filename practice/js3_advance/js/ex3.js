var units = [' không', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín '];
var unitsName = ['', ' ngàn ', ' triệu ', ' tỷ '];

function spellingTwoDigitsVie(unit, ten) {
    var resultTwoDigit = "";
    if (ten === 1) {
        resultTwoDigit += " mười ";
        if (unit != 0) {
            if (unit === 5) {
                resultTwoDigit += " lăm ";
            } else {
                resultTwoDigit += units[unit];
            }
        }
    } else {
        resultTwoDigit += (units[ten] + " mươi ");
        if (unit != 0) {
            if (unit === 1) {
                resultTwoDigit += " mốt ";
            } else if (unit === 5) {
                resultTwoDigit += " lăm ";
            } else {
                resultTwoDigit += units[unit];
            }
        }
    }
    return resultTwoDigit;
}

function spellingThreeDigitsVie(num) {
    var length = num.toString().length;
    var result = "";
    
    var digitFirst = Math.floor(num / 100);
    var digitSecond = Math.floor(num % 100 / 10);
    var digitThird = num % 100 % 10;

    if (num === 0) {
        return result;
    } else {
        if (digitFirst === 0) {
            result += " không trăm ";
            if (digitSecond === 0) {
                result += " lẻ ";
            }
        }
    }

    switch (length) {
        case 1:
            result += units[num];
            break;
        case 2:
            result += spellingTwoDigitsVie(digitThird, digitSecond);
            break;
        case 3:
            result += (units[digitFirst] + " trăm ");
            if (digitSecond === 0) {
                if (digitThird != 0) {
                    result += (" lẻ " + units[digitThird]);
                }
            } else {
                result += spellingTwoDigitsVie(digitThird, digitSecond);
            }
            break;
    }
    
    return result;
}

function spellingNumberVie(num) {
    var isSpell = "";
    var flag = 0;
    var check = "";
    
    do {
    	check = num.toString();
        if(check.length % 3 === 1)
            check = check.slice(1, check.length)
        else if(check.length % 3 === 2)
            check = check.slice(2, check.length);
        else if(check.length % 3 === 0)
            check = check.slice(3, check.length);
        
    	if(check.lastIndexOf("000") === (check.length - 3)){
            isSpell = spellingThreeDigitsVie(num % 1000) + isSpell;
            flag++;
        }else{
        	isSpell = spellingThreeDigitsVie(num % 1000) + unitsName[flag++] + isSpell;
        }

        num = Math.floor(num / 1000);
    } while (num != 0);

    isSpell = isSpell.trim()
    if (isSpell.search("không trăm  lẻ") === 0) {
        isSpell = isSpell.replace("không trăm  lẻ", "");
    } else if (isSpell.search("không trăm") === 0) {
        isSpell = isSpell.replace("không trăm", "");
    }
    isSpell = isSpell.trim()

    return isSpell;
}

document.getElementById("btnVie").addEventListener("click", function () {
    var num = document.getElementById("num").value;
    var spell = "";
    
    if(num.length > 12 && num.length <= 21){
        var numString1 = num.slice(-12, num.length);
        var numString2 = num.slice(0, (num.length -12))+"000";
        
        spell = spellingNumberVie(Number(numString2)) + " " + spellingNumberVie(Number(numString1));
        
        if(numString1 === "000000000000")
            spell += " tỷ ";
    }else if(num.length <= 12){
        spell += spellingNumberVie(Number(num));
    }else if(num.length > 21){
        alert("The number is too big. Please enter a smaller number.")
    }
    
    document.getElementById("result3").innerHTML = num + " is spelled as " + spell; 
})
