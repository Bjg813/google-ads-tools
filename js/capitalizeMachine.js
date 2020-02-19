function capitalizeMachine() {
    const capitalizeInput = document.getElementById('capitalizeInput').value;
    let splitStr = capitalizeInput.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    splitStr = splitStr.join(' ');
    document.getElementById('capitalizeOutput').innerHTML = splitStr;
}


