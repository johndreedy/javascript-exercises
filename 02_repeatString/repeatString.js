const repeatString = function(string, num) {
    array = [];
        if (num > -1) {
        for (i=0; i < num; i++) {
            array.push(string);
        }
        return array.join("");
    } else {
        return 'ERROR';
    }
}

console.log(repeatString("Hi", 0));

// Do not edit below this line
module.exports = repeatString;
