//console.log("Result - " + max(6, 6));
//console.log("Result - " + maxOfThree(6, 6, 8));
//console.log("Result - " + isVowel('u'));
//console.log("Result - " + reverse('utttrrryuiw'));

//let inputArr = ['ELLY', 'Tests', 'one', 'e'];
//console.log("Result - " + findLongestWord(inputArr));

//let inputArr = [1, 2, 3, 4, 5, 6]
//printOddNumbersOnly(inputArr);

//let inputArr = [1, 2, 3, 4, 5]
//console.log("Result - " + computeSumOfSquaresOfEvensOnly(inputArr));

let inputArr = [19, 9, 11, 0, 12]
console.log("Result - " + findSecondBiggest(inputArr));

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

/**
 * Returns true if input character is a vowel or otherwise false
 * @param {*} input Input character to be checked
 */
function isVowel(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u' ];

    for (let index = 0; index < vowels.length; index++) {
        if (vowels[index] == input) {
            return true;
        } else {
            return false;
        }        
    }
}

/**
 * Reverses an input string
 * @param {*} input Input string
 */
function reverse(input) {
    var result = "";
    for (var i = input.length - 1; i >= 0; i--) { 
        result += input[i]; 
    }
    return result;
}

/**
 * Returns longest word in an array
 * @param {*} inputArray Input Array
 */
function findLongestWord(inputArray) {
    var longestWord = inputArray.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}

/**
 * Prints odd numbers in a list only
 * @param {*} inputArray input array
 */
function printOddNumbersOnly(inputArray) {
    for (var i = inputArray.length - 1; i >= 0; i--) { 
        if (inputArray[i] % 2 != 0) {
            console.log("Odd Value - " + inputArray[i]);
        } 
    }
}

function computeSumOfSquaresOfEvensOnly(inputArray) {
    let result = 0;
    for (var i = inputArray.length - 1; i >= 0; i--) { 
        if (inputArray[i] % 2 == 0) {
            result += inputArray[i] * inputArray[i];
        } 
    }
    return result;
}


function findSecondBiggest(inputArray) {
    let largest = inputArray[0];
    let secondLargest = inputArray[0];

    for (var i = 0; i < inputArray.length; i++) { 
        if (inputArray[i] > largest) {
            secondLargest = largest;
            largest = inputArray[i];

        } else if (inputArray[i] > secondLargest && inputArray[i] != largest) {
            secondLargest = inputArray[i];

        }
    }    
    return secondLargest;
}


function printFibo(length, start, end) {
    
}