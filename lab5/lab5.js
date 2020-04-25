//console.log("Result - " + max(6, 6));
//console.log("Result - " + maxOfThree(6, 6, 8));
//console.log("Result - " + isVowel('u'));
//console.log("Result - " + reverse('utttrrryuiw'));

let inputArr = ['ELLY', 'Tests', 'one', 'e']
console.log("Result - " + findLongestWord(inputArr));

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

function findLongestWord(inputArray) {
    var longestWord = inputArray.reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}