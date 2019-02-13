// Ampac Analytical
function buttonAmpacAnalytical() {
    var monthlyBudgetAmpacAnalytical = 1700;
    var costInputAmpacAnalytical = document.getElementById("costInputAmpacAnalytical").value;
    var totalAmpacAnalytical = (monthlyBudgetAmpacAnalytical - costInputAmpacAnalytical) / daysLeftInMonth();
    document.getElementById("adjustBudgetAmpacAnalytical").innerHTML = Math.round(totalAmpacAnalytical * 100) / 100;
}