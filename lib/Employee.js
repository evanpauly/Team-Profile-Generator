class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        //add something?
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }
    
    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;