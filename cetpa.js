// CETPA
function buttonCETPA() {
    var monthlyBudgetCETPA = 500;
    var costInputCETPA = document.getElementById("costInputCETPA").value;
    var totalCETPA = (monthlyBudgetCETPA - costInputCETPA) / daysLeftInMonth();
    document.getElementById("adjustBudgetCETPA").innerHTML = Math.round(totalCETPA * 100) / 100;
}