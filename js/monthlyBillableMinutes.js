// Monthly Billable Minutes
function monthlyBillableMinutes() {
    var totalMinutesValue = document.getElementById("totalMinutesValue").value;
    var calculatedMinutes = (totalMinutesValue - 20) / 4;
    document.getElementById("calculatedMinutes").innerHTML = calculatedMinutes;
}