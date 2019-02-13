// Comedy Spot
function buttonComedySpot() {
    var monthlyBudgetComedySpot = 500;
    var costInputComedySpot = document.getElementById("costInputComedySpot").value;
    var totalComedySpot = (monthlyBudgetComedySpot - costInputComedySpot) / daysLeftInMonth();
    document.getElementById("adjustBudgetComedySpot").innerHTML = Math.round(totalComedySpot * 100) / 100;
}