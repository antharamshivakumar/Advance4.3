/*
Create an abstract class Department with one abstract method:
abstract class Department {
Public name: string;
constructor (name) {}
printName(): void { console dept name with appropriate message }
abstract printMeeting(): void;
}
Now extend this abstract class using AccountingDepartment:
class AccountingDepartment extends Department {
//Use department class property and methods here
}
Again create 2 more classes for different department and extend department class. And then create instance for all and show output using console.
*/

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
