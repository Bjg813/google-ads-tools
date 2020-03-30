function eomReport() {
    let paidMonth = document.getElementById('paidMonthInput').value;
    let paidImpressions = document.getElementById('paidAdImpressionsInput').value;
    let paidImpressionsPercentage = document.getElementById('paidAdImpressionPercentageInput').value;
    let paidAdClicks = document.getElementById('paidAdClicksInput').value;
    let paidAdClickPercentage = document.getElementById('paidAdClicksPercentageInput').value;
    let paidCTR = document.getElementById('paidCTR').value;
    let paidConversions = document.getElementById('paidConversionsInput').value;
    let paidConversionsPercentage = document.getElementById('paidConversionsPercentageInput').value;
    let paidPhoneCalls = document.getElementById('paidPhoneCallsInput').value;
    let paidPhoneCallsPercentage = document.getElementById('paidPhoneCallsPercentageInput').value;
    let paidTopKeyword = document.getElementById('paidTopKeywordInput').value;
    let paidTopKeywordClicks = document.getElementById('paidTopKeywordClicksInput').value;
    let paidTopAdCopy = document.getElementById('paidTopAdCopyInput').value;
    let paidTopAdClicks = document.getElementById('paidTopAdClicksInput').value;
    // Display eom message
    let eomMessage = 'In ' + paidMonth + ' your account had ' + paidImpressions + ' impressions, up ' + paidImpressionsPercentage + '% and we recorded ' + paidAdClicks + ' ad clicks, up ' + paidAdClickPercentage + '% from last month. We recorded ' + paidConversions + ' new conversions up ' + paidConversionsPercentage + '%' + ' and you had ' + paidPhoneCalls + ' new phone calls, up ' + paidPhoneCallsPercentage + '%. Your top keyword was ' + '\"' + paidTopKeyword + '\"' + ' with ' + paidTopKeywordClicks + ' clicks. Your top search ad was ' + '\"' + paidTopAdCopy + '\"' + ' with ' + paidTopAdClicks + ' clicks. We will keep optimizing your account and bidding on competitive keywords. Contact us with any questions.';
    // Display eom stats
    document.getElementById('paidEomOutput').innerHTML = eomMessage;
    document.getElementById('paidStatsAdClicksOutput').innerHTML = paidAdClicks;
    document.getElementById('paidStatsAdClickPercentage').innerHTML = paidAdClickPercentage;
    document.getElementById('paidStatsAdImpressions').innerHTML = paidImpressions;
    document.getElementById('paidStatsAdImpressionPercentage').innerHTML = paidImpressionsPercentage;
    document.getElementById('paidStatsCTR').innerHTML = paidCTR;
    document.getElementById('paidStatsAdConversions').innerHTML = paidConversions;
    document.getElementById('paidStatsAdConversionsPercentage').innerHTML = paidConversionsPercentage;
    document.getElementById('paidStatsAdPhoneCalls').innerHTML = paidPhoneCalls;
    document.getElementById('paidStatsAdPhoneCallsPercentage').innerHTML = paidPhoneCallsPercentage;
}
