// Client Constructor
function GoogleAdsClient(params) {
    this.currentCost = params.currentCost;
    this.monthlyCost = params.monthlyCost;
    this.viewId = params.viewId;
    this.displayMessage = function(msg) {
        let messageArea = this.viewId;
        messageArea.innerHTML = msg;
    }
}

GoogleAdsClient.prototype.processBudget = function() {
    let budgetDifference = this.monthlyCost - this.currentCost;
    let averageMonthlySpend = budgetDifference / daysLeftInMonth();
    this.monthlyCost = Math.round(averageMonthlySpend * 100) / 100;
    this.displayMessage(this.monthlyCost);
}

let stanfordYouthParams = {
    currentCost: document.getElementById('costInputStanfordYouthShared').value,
    monthlyCost: document.getElementById('stanfordMonthlyCost').innerHTML,
    viewId: document.getElementById('displayStanfordYouthBudget')
}

let stanfordYouthSolutions = new GoogleAdsClient(stanfordYouthParams);

let clients = [stanfordYouthSolutions];

function balanceBudget() {
    for (let i = 0; i < clients.length; i++) {
        clients[i].processBudget();
    }
}

function init() {
    let submitButton = document.getElementById('stanfordYouthSubmitButton');
    submitButton.onclick = balanceBudget;
}

window.onload = init;

// // View
// const view = {
//     displayMessage: function(msg) {
//         let messageArea = document.getElementById('displayBudget');
//         messageArea.innerHTML = msg;
//     }
// }

// // Controller
// const controller = {
//     percentage: 100,
//     processBudget: function(currentCost, monthlyCost) {
//         let budgetDifference = monthlyCost - currentCost;
//         let averageMonthlySpend = budgetDifference / daysLeftInMonth();
//         monthlyCost = Math.round(averageMonthlySpend * this.percentage) / 100;
//         view.displayMessage(monthlyCost) 
//     }
// }

// function balanceBudget() {
//     let currentCostInput = document.getElementById('costInputAmpacAnalytical');
//     let currentCost = currentCostInput.value;
//     let monthlyCost = document.getElementById('ampacMonthlyBudget').innerHTML;
//     controller.processBudget(currentCost, monthlyCost);
// } 

// init
// function init() {
//     let submitButton = document.getElementById('newBudgetButton');
//     submitButton.onclick = balanceBudget;
// }

// window.onload = init;