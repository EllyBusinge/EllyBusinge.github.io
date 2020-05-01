"use strict;"

/**
 * Solution to Number 1
 */
const person = {
    name : "",
    dateOfBirth : "",
    getName : function() {
        return this.name;
    },
    setName : function(newName) {
        this.name = newName;
    },
    toString : function() {
        return `The person’s name is ${this.name} \nJohn was born on ${processDate(this.dateOfBirth)}`;
    }
}

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = "December 10, 1998";
console.log("----------------------------------- Start Solution 1 ------------------------------");
console.log(john.toString());
console.log("----------------------------------- End Solution 1 --------------------------------");

/**
 * Solution to Number 2
 */
const employee = {
    __proto__: person,
    salary : "",
    hireDate : new Date(),
    doJob : function(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`);
    }
}

const anna = Object.create(employee);
anna.setName("Anna");
anna.salary = "249,995.50";


console.log("----------------------------------- Start Solution 2 ------------------------------");
anna.doJob("Programmer");
console.log("----------------------------------- End Solution 2 --------------------------------");


/**
 * Solution to Number 3
 */
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

var myPerson = new Person("Peter", "November 10, 1985");

// Add a name method to the person
myPerson.toString = function() {
  return `{Name: ${this.name}, DateOfBirth: ${processDate(this.dateOfBirth)}}`;
};

console.log("----------------------------------- Start Solution 3 ------------------------------");
console.log(myPerson.toString());
console.log("----------------------------------- End Solution 3 --------------------------------");


/**
 * Utility function that returns date in the format YYYY-MM-DD
 */
function processDate(initialDate) {
    let date = new Date(initialDate);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}