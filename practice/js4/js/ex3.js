const Tax_Brackets_60 = 0.05;
const Tax_Brackets_60_120 = 0.1;
const Tax_Brackets_120_210 = 0.15;
const Tax_Brackets_210_384 = 0.2;
const Tax_Brackets_384_624 = 0.25;
const Tax_Brackets_624_960 = 0.3;
const Tax_Brackets_960 = 0.35;

function calcTaxableIncome(income, depend) {
    return (income - 4 - depend * 1.6);
}
function calcTax(taxableIncome) {
    var tax = 0;

    if (taxableIncome <= 60) {
        tax = taxableIncome * Tax_Brackets_60;
    } else if (taxableIncome <= 120) {
        tax = 60 * Tax_Brackets_60 + (taxableIncome - 60) * Tax_Brackets_60_120;
    } else if (taxableIncome <= 210) {
        tax = 60 * Tax_Brackets_60 + 60 * Tax_Brackets_60_120 + (taxableIncome - 120) * Tax_Brackets_120_210;
    } else if (taxableIncome <= 384) {
        tax = 60 * Tax_Brackets_60 + 60 * Tax_Brackets_60_120 + 90 * Tax_Brackets_120_210 + (taxableIncome - 210) * Tax_Brackets_210_384;
    } else if (taxableIncome <= 624) {
        tax = 60 * Tax_Brackets_60 + 60 * Tax_Brackets_60_120 + 90 * Tax_Brackets_120_210 + 174 * Tax_Brackets_210_384 + (taxableIncome - 384) * Tax_Brackets_384_624;
    } else if (taxableIncome <= 960) {
        tax = 60 * Tax_Brackets_60 + 60 * Tax_Brackets_60_120 + 90 * Tax_Brackets_120_210 + 174 * Tax_Brackets_210_384 + 240 * Tax_Brackets_384_624 + (taxableIncome - 624) * Tax_Brackets_624_960;
    } else {
        tax = 60 * Tax_Brackets_60 + 60 * Tax_Brackets_60_120 + 90 * Tax_Brackets_120_210 + 174 * Tax_Brackets_210_384 + 240 * Tax_Brackets_384_624 + 336 * Tax_Brackets_624_960 + (taxableIncome - 960) * Tax_Brackets_960;
    }

    return tax;
}
document.getElementById("calcTax").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var income = document.getElementById("totalIncome").value;
    var dependPeople = document.getElementById("dependPeople").value;
    
    var taxable = calcTaxableIncome(income, dependPeople);
    var totalTax = calcTax(taxable);

    document.getElementById("tax").innerHTML = name + " have to pay " + totalTax + " million VND for personal income tax.";

})