
const caesar = function(string, shift) {
    // Normalize shifts to be between 0 and 25
    if (shift < 0) {
        shift = shift + (26 * (Math.abs(Math.trunc(shift/26)) + 1));
    } else if (shift >= 26) {
        shift = shift % 26;
    }

    // Generate arrays with unicode codes for mayus and minus letters
    const mayusCC = Array.from(Array(26)).map((e, i) => i + 65);
    const minusCC = Array.from(Array(26)).map((e, i) => i + 97);
    
    // Generate dictionaries for mayus and minus with the shift
    let mayusDict = {}
    for (let i = 0; i < mayusCC.length; i++){
        let codedCC =  mayusCC[i] + shift;
        // if the code shifted is out of range of letters:
        if (codedCC > 90){
            codedCC = codedCC - 26;
        } 
        mayusDict[mayusCC[i]] = codedCC;
    }

    let minusDict = {}
    for (let i = 0; i < minusCC.length; i++){
        let codedCC =  minusCC[i] + shift;
        if (codedCC > 122){
            codedCC = codedCC - 26;
        } 
        minusDict[minusCC[i]] = codedCC;
    }

    
    // unify both dictionaries
    const Dict = Object.assign({}, mayusDict, minusDict);

    // turn string into array and into unicode
    const msgArray = Array.from(string);
    const msgArrayCC = msgArray.map(letter => letter.charCodeAt(0));

    // code the message on unicode
    let codedMsgCC = Array(msgArrayCC.length);
    for(let i = 0; i < msgArrayCC.length; i++) {
        if ((msgArrayCC[i] >= 65 && msgArrayCC[i] <= 90) || (msgArrayCC[i] >= 97 && msgArrayCC[i] <= 122)) {
            codedMsgCC[i] = Dict[msgArrayCC[i]];
        } else {
            codedMsgCC[i] = msgArrayCC[i];
        }
    }
    
    // Code the message to letters and into a string
    const codedMsgString = codedMsgCC.reduce((total, code) => total = total + String.fromCharCode(code), '');
    return codedMsgString;

}

module.exports = caesar

// Char Codes
// A = 65
// Z = 90

// a = 97
// z = 122
