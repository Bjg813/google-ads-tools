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
    let paidTopAdClicks = document.getElementById('paidTopAdClicksInput').value;
    // View
    // Display eom message
    let eomMessage = 'Your Google Ad Grants account spent $' + grantSpend + ' in grant money, up ' + grantSpendPercentage + '% from last month. In ' + paidMonth + ' your account had ' + paidImpressions + ' impressions, up ' + paidImpressionsPercentage + '% and we recorded ' + paidAdClicks + ' ad clicks, up ' + paidAdClickPercentage + '% from last month. We recorded ' + paidConversions + ' new conversions up ' + paidConversionsPercentage + '%. Your top keyword was ' + '\"' + paidTopKeyword + '\"' + ' with ' + paidTopKeywordClicks + ' clicks. Your top search ad was ' + '\"' + paidTopAdCopy + '\"' + ' with ' + paidTopAdClicks + ' clicks. In the beginning of March we followed Google Ads COVID-19 recommendations by making sure all of your ads were sensitive to the current changing times, including taking out any mention of \"virus"\ in your ad copy and making sure your ads were not trying to take advantage of people during this current pandemic. In early March the Coronavirus has changed the digital marketing landscape, and luckily your ads performed very well. Some reasons your ads have performed so well include: people are online now more then ever before, people are trying to find ways they can help themselves and help their community, people are looking for employment opportunities, people want a positive distraction, and people are attracted to your services. With this in mind I am asking how I can help you reach your audience with Google Ads and other services we offer? Does your organization need help writing new blog posts to advertise via Google Ads, a new design for your website or social media management to directly reach out to your audience? Please let me know how Uptown Studios can best serve you in the next coming months. Lastly, I included an email from Tina, please see below. Thank you.';
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
    document.getElementById('topAdCopyClicks').innerHTML = paidTopAdClicks;
}
