// Function that can use document.getElementById()
function documentId(id) {
    return document.getElementById(id);
}

// Client Constructor
function GoogleAdsClient(params) {
    this.currentCost = params.currentCost;
    this.monthlyCost = params.monthlyCost;
    this.viewId = params.viewId;
    this.displayMessage = function(msg) {
        let messageArea = this.viewId;
        messageArea.innerHTML = msg;
    };
}

// Client Constructor prototype method
GoogleAdsClient.prototype.processBudget = function() {
    let budgetDifference = this.monthlyCost - documentId(this.currentCost).value;
    let averageMonthlySpend = budgetDifference / calendar.daysLeftInMonth();
    this.monthlyCost = Math.round(averageMonthlySpend * 100) / 100;
    this.displayMessage(this.monthlyCost);
}

// Client object parameters
const ampacAnalyticalParams = {
    monthlyCost: documentId('ampacMonthlyCost').innerHTML,
    currentCost: 'costInputAmpacAnalytical',
    viewId: documentId('displayAmpacAnalytical')
};

const stanfordYouthParams = {
    monthlyCost: documentId('stanfordMonthlyCost').innerHTML,
    currentCost: 'costInputStanfordYouthShared',
    viewId: documentId('displayStanfordYouth')
};

const citeParams = {
    monthlyCost: documentId('citeMonthlyCost').innerHTML,
    currentCost: 'costInputCite',
    viewId: documentId('displayCite')
};

const ddsoParams = {
    monthlyCost: documentId('ddsoMonthlyCost').innerHTML,
    currentCost: 'costInputDdso',
    viewId: documentId('displayDdso')
};

const censusParams = {
    monthlyCost: documentId('censusMonthlyCost').innerHTML,
    currentCost: 'costInputCensus',
    viewId: documentId('displayCensus')
};

const rioHondoParams = {
    monthlyCost: documentId('rioHondoMonthlyCost').innerHTML,
    currentCost: 'costInputRioHondo',
    viewId: documentId('displayRioHondo')
};

// Create new client constructor objects
const ampacAnalytical = new GoogleAdsClient(ampacAnalyticalParams);
const stanfordYouthSolutions = new GoogleAdsClient(stanfordYouthParams);
const cite = new GoogleAdsClient(citeParams);
const ddso = new GoogleAdsClient(ddsoParams);
const census2020 = new GoogleAdsClient(censusParams);
const rioHondo = new GoogleAdsClient(rioHondoParams);

// Save client constructor objects into an array
const clients = [ampacAnalytical, stanfordYouthSolutions, cite, ddso, census2020, rioHondo];

// Iterate through the clients array and run the processBudget GoogleAdsClient prototype method
function balanceBudget() {
    for (let i = 0; i < clients.length; i++) {
        clients[i].processBudget();
    }
}

// Initialize the document to take in the values and show values once button is clicked
function init() {
    let submitButton = document.getElementById('newBudgetButton');
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