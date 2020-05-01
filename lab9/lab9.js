
//Number 1
const person = {
    name : "",
    dateOfBirth : "",
    getPersonName : function() {
        return this.name;
    },
    setPersonName : function(newName) {
        this.name = newName;
    },
    toString : function() {
        let date = Date.parse(this.dateOfBirth);
        let dob = new Date(date * 1000);
        return `The person’s name is ${this.name} \nJohn was born on ${dob.getUTCFullYear()}-${dob.getMonth()}-${dob.getDate()}`;
    }
}

const john = Object.create(person);
john.setPersonName("John");
john.dateOfBirth = "December 10, 1998";
console.log(john.toString());