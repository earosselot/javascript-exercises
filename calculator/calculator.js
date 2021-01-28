function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((number, total) => total + number, 0);
}

function multiply (array) {
	return array.reduce((number, total) => total * number, 1);
}

function power(number, exponent) {
	return number ** exponent;
}

function factorial(number) {
	if (number === 0){
		return 1
	} else {
		return number * factorial(number - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}