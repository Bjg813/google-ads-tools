function eomReport() {
    let paidMonth = document.getElementById('paidMonthInput').value;
    let paidConversions = document.getElementById('paidConversionsInput').value;
    let paidPhoneCalls = document.getElementById('paidPhoneCallsInput').value;
    let paidTopKeyword = document.getElementById('paidTopKeywordInput').value;
    let paidTopKeywordClicks = document.getElementById('paidTopKeywordClicksInput').value;
    let paidTopAdCopy = document.getElementById('paidTopAdCopyInput').value;
    let paidTopAdClicks = document.getElementById('paidTopAdClicksInput').value;
    let eomMessage = 'In ' + paidMonth + ' we recorded ' + paidConversions + ' new conversions and ' + paidPhoneCalls + ' new phone calls. Your top keyword was ' + '\"' + paidTopKeyword + '\"' + ' with ' + paidTopKeywordClicks + ' clicks. Your top search ad was ' + '\"' + paidTopAdCopy + '\"' + ' with ' + paidTopAdClicks + ' clicks. We will keep optimizing your account and bidding on competitive keywords. Contact us with any questions.';
    // Display eom message
    document.getElementById('paidEomOutput').innerHTML = eomMessage;
}
