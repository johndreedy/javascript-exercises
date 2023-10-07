const reverseString = function(string) {
    let stringArray = string.split('').reverse().join('');
    return stringArray;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
