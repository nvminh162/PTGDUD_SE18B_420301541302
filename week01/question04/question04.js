// Test data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// Function to calculate tip and print the result
function calculateTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

// Calculate and print for each test data
calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);