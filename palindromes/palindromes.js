const palindromes = function(string) {
    let onlyLettersString = string.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase();
    let backwardsString = '';
    for (i=onlyLettersString.length; i>=0; i--){
        if(i === onlyLettersString.length) {
            let backwardsString = onlyLettersString[i];
        } else {
            backwardsString = backwardsString.concat(onlyLettersString[i]);
        }
    }
    return onlyLettersString === backwardsString;
}


module.exports = palindromes
