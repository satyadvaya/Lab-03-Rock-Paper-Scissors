export default checkResult;

const checkResult = (userThrow, computerThrow) => {
    if (userThrow === 'rock' && computerThrow === 'rock') {
        return 'draws';
    } if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'loses';
    } if (userThrow === 'rock' && computerThrow === 'scisors') {
        return 'wins';
    } if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'wins';
    } if (userThrow === 'paper' && computerThrow === 'paper') {
        return 'draws';
    } if (userThrow === 'paper' && computerThrow === 'scisors') {
        return 'loses';
    } if (userThrow === 'scisors' && computerThrow === 'rock') {
        return 'loses';
    } if (userThrow === 'scisors' && computerThrow === 'paper') {
        return 'wins';
    } else {
        return 'draws';
    }
};