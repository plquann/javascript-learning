const kW_50_First = 500;
const kW_50_Next = 650;
const kW_100_Next = 850;
const kW_150_Next = 1100;
const kW_remains = 1300;

function calcElectricBill(kW) {
    var totalBill = 0;

    if (kW <= 50) {
        totalBill = kW * kW_50_First;
    } else if (kW <= 100) {
        totalBill = (50 * kW_50_First) + (kW - 50) * kW_50_Next;
    } else if (kW <= 200) {
        totalBill = (50 * kW_50_First) + (50 * kW_50_Next) + (kW - 100) * kW_100_Next;
    } else if (kW <= 350) {
        totalBill = (50 * kW_50_First) + (50 * kW_50_Next) + (100 * kW_100_Next) + (kW - 200) * kW_150_Next;
    } else {
        totalBill = (50 * kW_50_First) + (50 * kW_50_Next) + (100 * kW_100_Next) + (150 * kW_150_Next) + (kW - 350) * kW_remains;
    }

    return totalBill;
}
document.getElementById("calcElect").addEventListener("click", function () {
    var name = document.getElementById("nameCus").value;
    var kW = document.getElementById("kW").value;

    var totalBill = calcElectricBill(kW);

    document.getElementById("bill").innerHTML = name + " customer has to pay " + totalBill + " VND for Electric Bill.";

})