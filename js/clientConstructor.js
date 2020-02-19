// Google Ads Client constructor
function GoogleAdsClient(params) {
    this.monthlyBudget = params.monthlyBudget;
    this.costInput = params.costInput;
    this.adjustBudget = function() {
        return (this.monthlyBudget - this.costInput) / daysLeftInMonth();
    };
    this.roundNumber = function() {
        return Math.round(this.adjustBudget * 100) / 100;
    };
}

// Cetpa Parameters - monthlyBudget, costInput
const cetpaParams = {
    monthlyBudget: 500,
    costInput: document.getElementById("costInputCETPA").value
};

// Create a new constructor for cetpa client
const cetpa = new GoogleAdsClient(cetpaParams);

// List clients
const clients = [cetpa];

// Iterate through the clients
for (let i = 0; i < clients.length; i++) {
    clients[i].adjustBudget;
    clients[i].roundNumber;
}
