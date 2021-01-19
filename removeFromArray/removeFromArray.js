const removeFromArray = function(array, element) {
    const argumentsLenght = arguments.length;
    let numbersToDelete = [];
    for (i = 1; i < argumentsLenght; i++) {
        numbersToDelete.push(arguments[i]);
    }
    for (i = 0; i < (argumentsLenght - 1); i++) {
        let idx = array.indexOf(numbersToDelete[i]);
        while (idx != -1){
            array.splice(idx, 1);
            idx = array.indexOf(numbersToDelete[i]);
        }
    }
    return array
}

module.exports = removeFromArray
