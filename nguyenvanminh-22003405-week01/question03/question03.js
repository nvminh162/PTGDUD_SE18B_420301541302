// Function to calculate average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Data 1
let dolphinsAvg1 = calculateAverage(96, 108, 89);
let koalasAvg1 = calculateAverage(88, 91, 110);

if (dolphinsAvg1 > koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAvg1}`);
} else if (koalasAvg1 > dolphinsAvg1 && koalasAvg1 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvg1}`);
} else if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100 && koalasAvg1 >= 100) {
    console.log(`It's a draw with both teams scoring ${dolphinsAvg1}`);
} else {
    console.log(`No team wins the trophy`);
}

// Data Bonus 1
let dolphinsAvg2 = calculateAverage(97, 112, 101);
let koalasAvg2 = calculateAverage(109, 95, 123);

if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAvg2}`);
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvg2}`);
} else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= 100 && koalasAvg2 >= 100) {
    console.log(`It's a draw with both teams scoring ${dolphinsAvg2}`);
} else {
    console.log(`No team wins the trophy`);
}

// Data Bonus 2
let dolphinsAvg3 = calculateAverage(97, 112, 101);
let koalasAvg3 = calculateAverage(109, 95, 106);

if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAvg3}`);
} else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvg3}`);
} else if (dolphinsAvg3 === koalasAvg3 && dolphinsAvg3 >= 100 && koalasAvg3 >= 100) {
    console.log(`It's a draw with both teams scoring ${dolphinsAvg3}`);
} else {
    console.log(`No team wins the trophy`);
}