const repeatString = function(string, number) {
    // let result = string;
    // for (let i = 1; i < number; i++) {
    //     result = result + string;
    // }
    let result = '';
    if (number < 0){
        result = 'ERROR';
    } else {
    
        let i = 0;

        while (i < number) {
            result = result + string;
            i++
        }
    }   
    return result
}

module.exports = repeatString
