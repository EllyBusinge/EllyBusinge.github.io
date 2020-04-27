var initialValue = 5;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(
//     function (accumulator, currentValue ) {
//         return accumulator + currentValue.x; }, initialValue);

var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, initialValue);

//console.log(sum); // logs 6


// const things = {
//     'a': 97,
//     'b': 98,
//     'c': 99,
// };

// for (const key in things) {
//     console.log(key + ',' + things[key]);
// }

// const things = [97, 98, 99];

// for (const key in things) {
//     console.log(key + ',' + things[key]);
// }

// function log () {
//     console.log ("No Arg");
// }

// function log (x) {
//     console.log ("1 Argument: " + x);
// }

// function log (x, y) {
//     console.log ("2 Arguments: " + x + "," + y);
// }

// log();
// log(5);
// log(6, 7);

function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
}

//const max1 = findMax(1, 123, 115, 66, 88);

function delayCalc () {
    setTimeout(findMax(1, 123, 115, 66, 88), 2000);
}

delayCalc ();