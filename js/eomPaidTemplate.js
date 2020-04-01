function eomReport() {
    // Model
    let grantSpend = document.getElementById('grantsMonthSpend').value;
    let grantSpendPercentage = document.getElementById('grantMonthSpendPercentage').value;
    let paidMonth = document.getElementById('paidMonthInput').value;
    let paidImpressions = document.getElementById('paidAdImpressionsInput').value;
    let paidImpressionsPercentage = document.getElementById('paidAdImpressionPercentageInput').value;
    let paidAdClicks = document.getElementById('paidAdClicksInput').value;
    let paidAdClickPercentage = document.getElementById('paidAdClicksPercentageInput').value;
    let paidCTR = document.getElementById('paidCTR').value;
    let paidConversions = document.getElementById('paidConversionsInput').value;
    let paidConversionsPercentage = document.getElementById('paidConversionsPercentageInput').value;
    let paidTopKeyword = document.getElementById('paidTopKeywordInput').value;
    let paidTopKeywordClicks = document.getElementById('paidTopKeywordClicksInput').value;
    let paidTopAdCopy = document.getElementById('paidTopAdCopyInput').value;
    let paidTopAdCopyDescription = document.getElementById('paidTopAdCopyDescriptionInput').value
    let paidTopAdClicks = document.getElementById('paidTopAdClicksInput').value;
    let secondTopKeyword = document.getElementById('secondTopKeywordInput').value;
    let secondTopKeywordClicks = document.getElementById('secondTopKeywordClicksInput').value;
    let thirdTopKeyword = document.getElementById('thirdTopKeywordInput').value;
    let thirdTopKeywordClicks = document.getElementById('thirdTopKeywordClicksInput').value;
    let fourthTopKeyword = document.getElementById('fourthTopKeywordInput').value;
    let fourthTopKeywordClicks = document.getElementById('fourthTopKeywordClicksInput').value;
    // View
    // Display eom message
    let eomMessage = 'Your Google Ad Grants account spent $' + grantSpend + ' in grant money, ' + grantSpendPercentage + '% from last month. In ' + paidMonth + ' your account had ' + paidImpressions + ' impressions, ' + paidImpressionsPercentage + '% and we recorded ' + paidAdClicks + ' ad clicks, ' + paidAdClickPercentage + '% from last month. We recorded ' + paidConversions + ' new conversions ' + paidConversionsPercentage + '%. Your top keyword was ' + '\"' + paidTopKeyword + '\"' + ' with ' + paidTopKeywordClicks + ' clicks. Your top search ad was ' + '\"' + paidTopAdCopy + '\"' + ' with ' + paidTopAdClicks + ' clicks. In the beginning of March we followed Google Ads COVID-19 recommendations by making sure all of your ads were sensitive to the current changing times, including taking out any mention of \"virus"\ in your ad copy and making sure your ads were not trying to take advantage of people during this current pandemic. We will keep monitoring your account. Let us know how we can better help you reach out to your audiences during these coming months.';
    // Display eom stats
    document.getElementById('paidEomOutput').innerHTML = eomMessage;
    document.getElementById('paidStatsAdClicksOutput').innerHTML = paidAdClicks;
    document.getElementById('paidStatsAdClickPercentage').innerHTML = paidAdClickPercentage;
    document.getElementById('paidStatsAdImpressions').innerHTML = paidImpressions;
    document.getElementById('paidStatsAdImpressionPercentage').innerHTML = paidImpressionsPercentage;
    document.getElementById('paidStatsCTR').innerHTML = paidCTR;
    document.getElementById('paidStatsAdConversions').innerHTML = paidConversions;
    document.getElementById('paidStatsAdConversionsPercentage').innerHTML = paidConversionsPercentage;
    document.getElementById('topAdCopy').innerHTML = paidTopAdCopy;
    document.getElementById('topAdCopyDescription').innerHTML = paidTopAdCopyDescription;
    document.getElementById('topAdCopyClicks').innerHTML = paidTopAdClicks;
    document.getElementById('topAdCopyClicks').innerHTML = paidTopAdClicks;
    document.getElementById('firstTopKeyword').innerHTML = paidTopKeyword;
    document.getElementById('firstTopKeywordClicks').innerHTML = paidTopKeywordClicks;
    document.getElementById('secondTopKeyword').innerHTML = secondTopKeyword;
    document.getElementById('secondTopKeywordClicks').innerHTML = secondTopKeywordClicks;
    document.getElementById('thirdTopKeyword').innerHTML = thirdTopKeyword;
    document.getElementById('thirdTopKeywordClicks').innerHTML = thirdTopKeywordClicks;
    document.getElementById('fourthTopKeyword').innerHTML = fourthTopKeyword;
    document.getElementById('fourthTopKeywordClicks').innerHTML = fourthTopKeywordClicks;
}

function eomMonth() {
    return todaysMonth();
}
