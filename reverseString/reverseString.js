const reverseString = function(string) {
    const len = string.length;
    let res = '';
    for (i=len-1; i >= 0; i--) {
        res = res + string.charAt(i);
    }
    return res;
}

module.exports = reverseString;
