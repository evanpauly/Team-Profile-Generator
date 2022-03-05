const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
    super(name);
    this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber() {
        return `${this.OfficeNumber}`;
    }

    getRole() {
        return `Manager`;
    }

}

module.exports = Manager;