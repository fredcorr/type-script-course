"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins, reports = []) {
        super(id, 'IT');
        this.admins = admins;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a value");
        }
        this.addReports(value);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('IT Department - ID ' + this.id);
    }
}
const IT = new ITDepartment('LS', ['Max']);
IT.addEmployee('Max');
IT.addEmployee('Manu');
IT.describe();
IT.printEmployeeInformation();
console.log(IT);
IT.mostRecentReport = 'Year and report';
console.log(IT.mostRecentReport);
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
