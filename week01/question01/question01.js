// Data 01 -------------------------------
let markMass1 = 78
let markHeight1 = 1.69
let johnMass1 = 92
let johnHeight1 = 1.95

let markBMI1 = markMass1 / (markHeight1 ** 2)
let johnBMI1 = johnMass1 / (johnHeight1 ** 2)

let markHigherBMI1 = markBMI1 > johnBMI1
console.log(`
    Data 1 - Mark's BMI: ${markBMI1},
    John's BMI: ${johnBMI1}, 
    Mark has higher BMI: ${markHigherBMI1}
`)

// Data 02 -------------------------------
let markMass2 = 95
let markHeight2 = 1.88
let johnMass2 = 85
let johnHeight2 = 1.76

let markBMI2 = markMass2 / (markHeight2 ** 2)
let johnBMI2 = johnMass2 / (johnHeight2 ** 2)

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`
    Data 2 - Mark's BMI: ${markBMI2},
    John's BMI: ${johnBMI2},
    Mark has higher BMI: ${markHigherBMI2}
`)