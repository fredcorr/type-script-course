class Department {
    private employees: string[] = [] 

    constructor( private id: string, public name: string ) {
    }

    describe( this: Department ) {
        console.log( `Department (${ this.id }): ${ this.name } ` );   
    }

    addEmployee( employee: string ) {
        this.employees.push( employee )
    }

    printEmployeeInformation() {
        console.log( this.employees.length );
        console.log( this.employees );
    }
}

const accounting = new Department( 'LS' ,'Accounting' );

accounting.addEmployee( 'Max' );
accounting.addEmployee( 'Manu' );

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();