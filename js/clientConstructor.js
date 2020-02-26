// Google Ads Client constructor
function GoogleAdsClient(params) {
    this.monthlyBudget = params.monthlyBudget;
    this.costInput = params.costInput;
}

// Create adjustBudget prototype
GoogleAdsClient.prototype.adjustBudget = function() {
    return Math.round((this.monthlyBudget - this.costInput) / daysLeftInMonth() * 100) / 100;
};

// Cetpa Parameters - monthlyBudget, costInput
let cetpaParams = {
    monthlyBudget: 1700,
    costInput: document.getElementById("costInputAmpacAnalytical").value
};

// Create a new constructor for cetpa client
let cetpa = new GoogleAdsClient(cetpaParams);

// List clients
let clients = [cetpa];

// Iterate through the clients
const budgetAdjuster = function() {
    for (let i = 0; i < clients.length; i++) {
        console.log(clients[i].adjustBudget());
    }
}

const displayBudget = function() {
    document.getElementById('displayBudget').innerHTML = budgetAdjuster();
}

// Add event listener for brwoser to register the new budget button
document.getElementById('newBudgetButton').addEventListener('click', displayBudget);