const sumAll = function(num1, num2) {
    let minor, major;
    let sum;
    if (typeof(num1) != 'number' || typeof(num2) != 'number'){
        sum = 'ERROR';
    }else if (num1 < 0 || num2 < 0){
        sum = 'ERROR';
    } else {

        // Order numbers
        if (num1 < num2) {
            minor = num1;
            major = num2;
        } else {
            minor = num2;
            major = num1;
        }
        
        sum = 0
        for (i = minor; i <= major; i++) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumAll
