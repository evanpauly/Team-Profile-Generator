const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name) {
    super(name);
    this.School = School;
    }

    getSchool() {
        return `${this.School}`;
    }

    getRole() {
        return `Intern`;
    }
    
}

module.exports = Intern;