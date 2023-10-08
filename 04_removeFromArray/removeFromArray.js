const removeFromArray = function (array, ...strings) {
    return array.filter(string => !strings.includes(string));
} 
removeFromArray(["Hello", "World", "!"], "World", "!");

// Do not edit below this line
module.exports = removeFromArray;
