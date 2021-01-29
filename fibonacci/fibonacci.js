function fib(num) {
    if (num === 1) {
        return Array.from([1]);
    } else if (num === 2) {
        return Array.from([1, 1]);
    } else {
        let prev = fib(num-1);
        let newNumber = prev[(prev.length)-1] + prev[(prev.length)-2];
        return prev.concat(newNumber);
    }
}

const fibonacci = function(position) {
    position = parseInt(position);
    if (position <= 0) {
        return "OOPS";
    } else {
        let fiboArray = fib(position);
        return fiboArray[position - 1];
    }
    
}

module.exports = fibonacci
