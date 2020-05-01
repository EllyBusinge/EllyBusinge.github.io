"use strict;"

//Number 1
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
        return `The person’s name is ${this.name} \nJohn was born on ${this.dateOfBirth}`;
    }
}

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = "1998-12-10";
console.log(john.toString());

const peter = Object.create(person);
peter.setName("Peter");
peter.dateOfBirth = "1985-11-10";
console.log(peter.toString());

//Number 2
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
anna.doJob("Programmer");

// Number 3
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

var myPerson = new Person("John", "1998-12-10");

// Add a name method to the person
myPerson.toString = function() {
  return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
};

console.log(myPerson.toString());