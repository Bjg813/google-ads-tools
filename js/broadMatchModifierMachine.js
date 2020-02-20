function broadMatchModifier() {
    const broadMatchModifierInput = document.getElementById('broadMatchModifierInput').value;
    let splitStr = broadMatchModifierInput.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = '+' + splitStr[i].charAt(0) + splitStr[i].substring(1);
    }
    splitStr = splitStr.join(' ');
    document.getElementById('broadMatchModifierOutput').innerHTML = splitStr;
}
