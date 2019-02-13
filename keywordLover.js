// Keyword Lover
function keywordLover() {
    let keywordInput = document.getElementById('keywordInput').value;
    let keyword2019 = keywordInput.replace(/2019/g, '#');
    let keywordNoNumbers = keyword2019.replace(/[0-9]/g, '');
    let addKeyword2019 = keywordNoNumbers.replace(/#/g, '2019');
    let noPeriods = addKeyword2019.replace(/[.]/g, '');
    let noCommas = noPeriods.replace(/[,]/g, '');
    let noDashes = noCommas.replace(/[—]/g, '');
    let noDollarSigns = noDashes.replace(/[$]/g, '');
    let noLow = noDollarSigns.replace(/Low/g, ',');
    let noMedium = noLow.replace(/Medium/g, ',');
    let noHigh = noMedium.replace(/High/g, ',');
    let noAd = noHigh.replace(/Ad/g, '');
    let noGroup = noAd.replace(/group/g, ',');
    let noPercentage = noGroup.replace(/%/g, '');
    document.getElementById("keywordOutput").innerHTML = noPercentage;
}