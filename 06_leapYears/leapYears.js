const leapYears = function(year) {
    fourLeapYear = year / 4;
    hundredLeapYear = year / 100;
    fourHundredLeapYear = year / 400;
    if (Number.isInteger(fourLeapYear)) {
        if (Number.isInteger(hundredLeapYear)) {
            if (Number.isInteger(fourHundredLeapYear)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
