// Ampac Fine Chemicals
function buttonAmpacFineChemicals() {
    var monthlyBudgetAmpacFineChemicals = 1700;
    var costInputAmpacFineChemicals = document.getElementById("costInputAmpacFineChemicals").value;
    var totalAmpacFineChemicals = (monthlyBudgetAmpacFineChemicals - costInputAmpacFineChemicals) / daysLeftInMonth();
    document.getElementById("adjustBudgetAmpacFineChemicals").innerHTML = Math.round(totalAmpacFineChemicals * 100) / 100;
}