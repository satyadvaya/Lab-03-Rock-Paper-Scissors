export function checkResult(userThrow, computerThrow) {
    if (userThrow === 'rock' && computerThrow === 'rock') {
        return 'draws';
    } else if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'loses';
    } else if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 'wins';
    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'wins';
    } else if (userThrow === 'paper' && computerThrow === 'paper') {
        return 'draws';
    } else if (userThrow === 'paper' && computerThrow === 'scissors') {
        return 'loses';
    } else if (userThrow === 'scissors' && computerThrow === 'rock') {
        return 'loses';
    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 'wins';
    } else {
        return 'draws';
    }
}