function calculateMinMax (number1, number2) {
    let min = 0;
    let max = 0;
    if (number1 > number2) {
        min = number2;
        max = number1;
    } else if (number1 < number2) {
        min = number1;
        max = number2;
    } else {
        return 'ERROR';
    }
    return [min, max];
}

const sumAll = function(min, max) {

    if (typeof min == 'number' && typeof max == 'number') {
        let minMaxArray = calculateMinMax(min, max);
        min = minMaxArray[0];
        max = minMaxArray[1];

        let sum = 0;
        for (let i=min; i <= max; i++) {
            sum += i;
        } 
        if (sum < 0) {
            return 'ERROR'
        } else {
            return sum;
        }

    } else {
        return 'ERROR';
    }
}

console.log(sumAll(2, 1));

// Do not edit below this line
module.exports = sumAll;
