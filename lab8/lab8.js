"use strict;"

/**
 * Solution to number 6
 */
const count = {
    "counter" : 0,
    "add" : function () {
        return this.counter += 1;
    },
    "reset" : function () {
        this.counter = 0;
        return this.counter;
    }
};

// console.log(count.add());
// console.log(count.add());
// console.log(count.add());
// console.log(count.reset());

/**
 * Solution to number 7
 * The free variable is counter. It is not declared locally nor passed to the function as a parameter 
 */

/**
 * Solution to number 8
 */

function makeAdder(inc) {
    var counter = 0;
    return function () {
        return counter += inc;
    }
};

let add5 = makeAdder(5);
console.log(add5());
console.log(add5());
console.log(add5());