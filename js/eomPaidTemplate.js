// documentId is a global variable binding the document.getElementById() document method
function eomReport() {
      // Model
      // EOM input object
    const eom = {
        grantSpend: documentId('grantsMonthSpend').value,
        grantSpendPercentage: documentId('grantMonthSpendPercentage').value,
        impressions: documentId('paidAdImpressionsInput').value,
        impressionPercentage: documentId('paidAdImpressionPercentageInput').value,
        clicks: documentId('paidAdClicksInput').value,
        clickPercentage: documentId('paidAdClicksPercentageInput').value,
        clickThroughRate: documentId('paidCTR').value,
        conversions: documentId('paidConversionsInput').value,
        conversionPercentage: documentId('paidConversionsPercentageInput').value,
        topKeyword: documentId('paidTopKeywordInput').value,
        topKeywordClicks: documentId('paidTopKeywordClicksInput').value,
        topAdHeadline: documentId('paidTopAdCopyInput').value,
        topAdDescription: documentId('paidTopAdCopyDescriptionInput').value,
        topAdClicks: documentId('paidTopAdClicksInput').value,
        secondKeyword: documentId('secondTopKeywordInput').value,
        secondKeywordClicks: documentId('secondTopKeywordClicksInput').value,
        thirdKeyword: documentId('thirdTopKeywordInput').value,
        thirdKeywordClicks: documentId('thirdTopKeywordClicksInput').value,
        fourthKeyword: documentId('fourthTopKeywordInput').value,
        fourthKeywordClicks: documentId('fourthTopKeywordClicksInput').value
    };

    // EOM message binding
    const eomMessage = 'Your Google Ad Grants account spent $' + eom.grantSpend + ' in grant money, ' + eom.grantSpendPercentage + '% from last month. In ' + calendar.todaysMonth(calendar.getTodaysOneMonthBefore()) + ' your account had ' + eom.impressions + ' impressions, ' + eom.impressionPercentage + '% and we recorded ' + eom.clicks + ' ad clicks, ' + eom.clickPercentage + '% from last month. We recorded ' + eom.conversions + ' new conversions ' + eom.conversionPercentage + '%. Your top keyword was ' + '\"' + eom.topKeyword + '\"' + ' with ' + eom.topKeywordClicks + ' clicks. Your top search ad was ' + '\"' + eom.topAdHeadline + '\"' + ' with ' + eom.topAdClicks + ' clicks.';

    // View
    // Display EOM message to website
    documentId('paidEomOutput').innerHTML = eomMessage;
    // Display EOM stats to website
    documentId('paidStatsAdClicksOutput').innerHTML = eom.clicks;
    documentId('paidStatsAdClickPercentage').innerHTML = eom.clickPercentage;
    documentId('paidStatsAdImpressions').innerHTML = eom.impressions;
    documentId('paidStatsAdImpressionPercentage').innerHTML = eom.impressionPercentage;
    documentId('paidStatsCTR').innerHTML = eom.clickThroughRate;
    documentId('paidStatsAdConversions').innerHTML = eom.conversions;
    documentId('paidStatsAdConversionsPercentage').innerHTML = eom.conversions;
    documentId('topAdCopy').innerHTML = eom.topAdHeadline;
    documentId('topAdCopyDescription').innerHTML = eom.topAdDescription;
    documentId('topAdCopyClicks').innerHTML = eom.paidTopAdClicks;
    documentId('firstTopKeyword').innerHTML = eom.topKeyword;
    documentId('firstTopKeywordClicks').innerHTML = eom.topKeywordClicks;
    documentId('secondTopKeyword').innerHTML = eom.secondKeyword;
    documentId('secondTopKeywordClicks').innerHTML = eom.secondKeywordClicks;
    documentId('thirdTopKeyword').innerHTML = eom.thirdKeyword;
    documentId('thirdTopKeywordClicks').innerHTML = eom.thirdKeywordClicks;
    documentId('fourthTopKeyword').innerHTML = eom.fourthKeyword;
    documentId('fourthTopKeywordClicks').innerHTML = eom.fourthKeywordClicks;
}