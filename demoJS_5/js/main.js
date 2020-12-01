/**
 * Author: QuanKhs
 * Date: November 27, 2020
 * Release: dd/mm/yyyy
 * Desc: Calculate Fee Grab
 */
const grabCar_KMFirst = 8000;
const grabCar_1 = 7500;
const grabCar_2 = 7000;
const grabCar_Wait = 2000;

const grabSUV_KMFirst = 9000;
const grabSUV_1 = 8500;
const grabSUV_2 = 8000;
const grabSUV_Wait = 3000;

const grabBlack_KMFirst = 10000;
const grabBlack_1 = 9500;
const grabBlack_2 = 9000;
const grabBlack_Wait = 3500;

document.getElementById("btnCalcFee").onclick = function () {
    var grabCar = document.getElementById("grabCar");
    var grabSUV = document.getElementById("grabSUV");
    var grabBlack = document.getElementById("grabBlack");

    var kM = document.getElementById("inputKM").value;
    var timeWait = document.getElementById("timeWait").value;

    var typeVehicle = "";
    typeVehicle = checkTypeVehicle(grabCar, grabSUV, grabBlack);
    
    var totalBill = 0;
    var totalWait = 0;
    switch (typeVehicle) {
        case "grabCar":
            totalWait = calcWaitBill(timeWait, grabCar_Wait);
            totalBill = calcTotalBill(kM, grabCar_KMFirst,grabCar_1, grabCar_2, totalWait );
            break;
        case "grabSUV":
            totalWait = calcWaitBill(timeWait, grabSUV_Wait);
            totalBill = calcTotalBill(kM, grabSUV_KMFirst,grabSUV_1, grabSUV_2, totalWait );
        case "grabBlack":
            totalWait = calcWaitBill(timeWait, grabBlack_Wait);
            totalBill = calcTotalBill(kM, grabBlack_KMFirst,grabBlack_1, grabBlack_2, totalWait );
        default:
            console.log("Do not Calculate!");
    }
    console.log(totalBill);

    document.getElementById("divThanhTien").innerHTML = totalBill + " VND";
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("divThanhTien").style.fontSize = "40px";

}
//check type Vehicle
function checkTypeVehicle(car, suv, black){
    if (car.checked) {
        return "grabCar";
    } else if (suv.checked) {
        return "grabSUV";
    } else if (black.checked) {
        return "grabBlack";
    } else {
        console.log("Vehicle is undefined!");
    }
}
function calcWaitBill(timeWait, price){
    return  (Math.floor(timeWait / 3)) * price;
}
function calcTotalBill(kM, firstKM, grab1, grab2, totalWait ){
    if (kM <= 1) {
        return (kM * firstKM + totalWait);
    } else if (kM <= 19) {
        return ((firstKM * 1) + (kM - 1) * grab1 + totalWait);
    } else if (kM > 19) {
        return ((firstKM * 1) + (18 * grab1) + ((kM - 19) * grab2) + totalWait);
    }
}
function getELEbyID(id){
    return document.getElementById(id);
}