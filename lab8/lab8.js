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

// let add5 = makeAdder(5);
// console.log(add5());
// console.log(add5());
// console.log(add5());

/**
 * Solution to number 9
 * The Module Pattern can be used to organize the functions and variable declarations.
 */

 /**
 * Solution to number 10
 */
const Employee = (function() {
    let name;
    let age;
    let salary;

    const setName = function (newName) {
        name = newName;
    };

    const setAge = function (newAge) {
        age = newAge;
    };

    const setSalary = function (newSalary) {
        salary = newSalary;
    };

    const getName = function () {
        return name;
    };

    const getAge = function () {
        return age;
    };

    const getSalary = function () {
        return salary;
    };

    const incrementAge = function (increment) {
        age = getAge() + increment;
    };

    const increaseSalary = function (percentage) {
        salary = getSalary() * (1 + percentage/100);
    };

    const toString = function() {
        return `Name: ${name}, Salary: ${salary}, Age: ${age}`;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        incrementAge: incrementAge,
        increaseSalary: increaseSalary,
        toString: toString
    };
})();

// Employee.setName("Elly");
// Employee.setAge(40);
// Employee.setSalary(600000);
// console.log(Employee.toString());
// Employee.increaseSalary(1000);
// Employee.incrementAge(3);
// console.log(Employee.toString());

 /**
 * Solution to number 11
 */

const EmployeeWithAddress = (function() {
    let empAddress;
    
    const setEmpAddress = function (address) {
        empAddress = address;
    };

    const getEmpAddress = function () {
        return empAddress;
    };

    return {
        setEmpAddress: setEmpAddress,
        getEmpAddress: getEmpAddress,
        __proto__: Employee
    };
})();

EmployeeWithAddress.setName("Elly");
EmployeeWithAddress.setAge(40);
EmployeeWithAddress.setSalary(600000);
EmployeeWithAddress.setEmpAddress("Fairfield, Iowa #88");
console.log(EmployeeWithAddress.getEmpAddress());
//console.log(Employee.address);