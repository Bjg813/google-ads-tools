// Comedy Spot
function buttonStanfordYouthShared() {
    var monthlyBudgetStanfordYouthShared = 213;
    var costInputStanfordYouthShared = document.getElementById("costInputStanfordYouthShared").value;
    var totalStanfordYouthShared = (monthlyBudgetStanfordYouthShared - costInputStanfordYouthShared) / daysLeftInMonth();
    document.getElementById("adjustBudgetStanfordYouthShared").innerHTML = Math.round(totalStanfordYouthShared * 100) / 100;;
}