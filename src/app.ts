class Department {
    private employees: string[] = [] 

    constructor( private readonly id: string, public name: string ) {
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

class ITDepartment extends Department {

    constructor( id: string, public admins: string[], private reports: string[] = [] ) {
        super(id, 'IT');
    }

    addReports( text: string ) {
        this.reports.push( text )
    }

    printReports() {
        console.log( this.reports );
        
    }
}

const IT = new ITDepartment( 'LS', [ 'Max' ] );

IT.addEmployee( 'Max' );
IT.addEmployee( 'Manu' );

IT.describe();
IT.printEmployeeInformation();

console.log( IT );


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();