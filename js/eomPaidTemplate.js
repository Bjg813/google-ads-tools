function eomReport() {
    // Model
    // EOM input binding values
    const grantSpend = document.getElementById('grantsMonthSpend').value;
    const grantSpendPercentage = document.getElementById('grantMonthSpendPercentage').value;
    const paidMonth = document.getElementById('paidMonthInput').value;
    const paidImpressions = document.getElementById('paidAdImpressionsInput').value;
    const paidImpressionsPercentage = document.getElementById('paidAdImpressionPercentageInput').value;
    const paidAdClicks = document.getElementById('paidAdClicksInput').value;
    const paidAdClickPercentage = document.getElementById('paidAdClicksPercentageInput').value;
    const paidCTR = document.getElementById('paidCTR').value;
    const paidConversions = document.getElementById('paidConversionsInput').value;
    const paidConversionsPercentage = document.getElementById('paidConversionsPercentageInput').value;
    const paidTopKeyword = document.getElementById('paidTopKeywordInput').value;
    const paidTopKeywordClicks = document.getElementById('paidTopKeywordClicksInput').value;
    const paidTopAdCopy = document.getElementById('paidTopAdCopyInput').value;
    const paidTopAdCopyDescription = document.getElementById('paidTopAdCopyDescriptionInput').value
    const paidTopAdClicks = document.getElementById('paidTopAdClicksInput').value;
    const secondTopKeyword = document.getElementById('secondTopKeywordInput').value;
    const secondTopKeywordClicks = document.getElementById('secondTopKeywordClicksInput').value;
    const thirdTopKeyword = document.getElementById('thirdTopKeywordInput').value;
    const thirdTopKeywordClicks = document.getElementById('thirdTopKeywordClicksInput').value;
    const fourthTopKeyword = document.getElementById('fourthTopKeywordInput').value;
    const fourthTopKeywordClicks = document.getElementById('fourthTopKeywordClicksInput').value;

    // EOM message binding
    const eomMessage = 'Your Google Ad Grants account spent $' + grantSpend + ' in grant money, ' + grantSpendPercentage + '% from last month. In ' + paidMonth + ' your account had ' + paidImpressions + ' impressions, ' + paidImpressionsPercentage + '% and we recorded ' + paidAdClicks + ' ad clicks, ' + paidAdClickPercentage + '% from last month. We recorded ' + paidConversions + ' new conversions ' + paidConversionsPercentage + '%. Your top keyword was ' + '\"' + paidTopKeyword + '\"' + ' with ' + paidTopKeywordClicks + ' clicks. Your top search ad was ' + '\"' + paidTopAdCopy + '\"' + ' with ' + paidTopAdClicks + ' clicks. In the beginning of March we followed Google Ads COVID-19 recommendations by making sure all of your ads were sensitive to the current changing times, including taking out any mention of \"virus"\ in your ad copy and making sure your ads were not trying to take advantage of people during this current pandemic. We will keep monitoring your account. Let us know how we can better help you reach out to your audiences during these coming months.';
    
    // View
    // Display EOM message to website
    document.getElementById('paidEomOutput').innerHTML = eomMessage;
    // Display EOM stats to website
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