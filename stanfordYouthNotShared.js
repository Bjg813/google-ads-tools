// Stanford Youth Not Shared
function buttonStanfordYouthNotShared() {
    var monthlyBudgetStanfordYouthNotShared = 285;
    var costInputStanfordYouthNotShared = document.getElementById("costInputStanfordYouthNotShared").value;
    var totalStanfordYouthNotShared = (monthlyBudgetStanfordYouthNotShared - costInputStanfordYouthNotShared) / daysLeftInMonth();
    document.getElementById("adjustBudgetStanfordYouthNotShared").innerHTML = Math.round(totalStanfordYouthNotShared * 100) / 100;
}