function GoogleAdsClient(monthlyBudget, costInput, adjustBudget, daysLeftInMonth, roundNumber) {
    this.monthlyBudget = monthlyBudget;
    this.costInput = costInput;
    this.adjustBudget = adjustBudget;
    this.daysLeftInMonth = daysLeftInMonth();
    this.roundNumber = roundNumber;
}



