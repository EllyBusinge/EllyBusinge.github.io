'use strict'; 

//console.log("Result - " + max(6, 6));
//console.log("Result - " + maxOfThree(6, 6, 8));
//console.log("Result - " + isVowel('u'));
//console.log("Result - " + reverse('utttrrryuiw'));

//let inputArr = ['ELLY', 'Tests', 'one', 'e'];
//console.log("Result - " + findLongestWord(inputArr));

//let inputArr = [1, 2, 3, 4, 5, 6];
//printOddNumbersOnly(inputArr);

//let inputArr = [1, 2, 3, 4, 5];
//console.log("Result - " + computeSumOfSquaresOfEvensOnly(inputArr));

let inputArr = [19, 9, 11, 0, 12];
console.log("Result - " + findSecondBiggest(inputArr));

//console.log("Result - " + fibonacci(10, 0, 1));

//let inputArr = ['Elly', 'av', 'xxx', 'bbbbf', 'ff', 'f', 'ttt']
//console.log("Result - " + filterLongWords(inputArr, 4));

//let inputArr = [1, 2, 3, 4];
//console.log("Result - " + sum(inputArr));
//console.log("Result - " + multiply(inputArr));

//let inputArr = [1, 2, 3];
//console.log("Result - " + computeSumOfSquares(inputArr));

//let inputArr = [1, 2, 3, 4];
//console.log("Result - " + sum2(inputArr));
//console.log("Result - " + multiply2(inputArr));

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
    let largest = -1;
    let secondLargest = -1;

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

function fibonacci(n, a, b) {
    var result = [];
    var n1 = 0;
    var n2 = 1;
    if (n == 1 && a == 0 && b == 1) {
        result.push(n1);
    } else if (n >= 2) {
        result.push(n1);
        result.push(n2);
    } 

    for(let i = 2; i < n; ++i) {    
        let n3 = n1 + n2;       
        n1=n2;    
        n2=n3; 
        
        if (n3 >= a && n3 >= b) {
            result.push(n3);
        }
    } 
    return result;
}

function filterLongWords(inputArray, stringLength) {
    var result = [];
    for (var i = 0; i < inputArray.length; i++) { 
        if (inputArray[i].length > stringLength) {
            result.push(inputArray[i]);
        } 
    }
    return result;
}

function sum(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) { 
        sum += inputArray[i];
    }
    return sum;
}

function multiply(inputArray) {
    var sum = 1;
    for (var i = 0; i < inputArray.length; i++) { 
        sum *= inputArray[i];
    }
    return sum;
}

function computeSumOfSquares(inputArray) {
    var sum = inputArray.map(x => x * x).reduce((x, y) => x + y);
    return sum;
}

function sum2(inputArray) {
    return inputArray.reduce((x, y) => x + y);
}

function multiply2(inputArray) {
    return inputArray.reduce((x, y) => x * y);
}