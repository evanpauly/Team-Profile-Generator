const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
    super(name);
    this.Github = Github;
    }

    getGithub() {
        return `${this.Github}`;
    }

    getRole() {
        return `Engineer`;
    }

}

module.exports = Engineer;