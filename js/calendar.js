const now = new Date();

// Month
function todaysMonth() {
    let month;
    let monthNum =  now.getMonth();
    switch (monthNum) {
        case 0:
            month = 'January';
            break;
        case 1: 
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3: 
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December'
    }
    return month;
}

// Days in the month
function daysInMonth() {
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
}

// Todays day
function todaysDate() {
    return now.getDate();
}

// Days left in the month
function daysLeftInMonth() {
    return daysInMonth()-todaysDate();
}

// th & st
function stAndTh() {
    if(todaysDate() < 20) {
        return 'th';
    } else {
        return 'st';
    }
}

document.getElementById('todaysDate').innerHTML = todaysMonth() + " " + todaysDate() + stAndTh();
document.getElementById('daysInMonth').innerHTML = daysInMonth();
document.getElementById('daysLeftInMonth').innerHTML = daysLeftInMonth();
