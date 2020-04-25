//console.log("Result - " + max(6, 6));
console.log("Result - " + maxOfThree(6, 6, 8));
/**
 * Max takes in two numbers and returns the biggest of the two numbers
 * @param {*} number1 First number
 * @param {*} number2 Second number
 */
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

/**
 * Max takes in three numbers and returns the biggest of the three numbers
 * @param {*} number1 First number
 * @param {*} number2 Second number 
 * @param {*} number3 Third number
 */
function maxOfThree(number1, number2, number3) {
    if (number1 >= number2 && number1 >= number3) {
        return number1;
    } else if (number2 >= number1 && number2 >= number3) {
        return number2;
    } else {
        return number3;
    }
}