class Department {
    protected employees: string[] = [] 

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

    private lastReport: string;

    get mostRecentReport() {
        if ( this.lastReport ) {
            return this.lastReport;
        }
        throw new Error( "No report found" )
    }

    set mostRecentReport( value: string ) {
        if( !value ) {
            throw new Error( "Please pass in a value" )
        }
        this.addReports( value )
    }

    constructor( id: string, public admins: string[], private reports: string[] = [] ) {
        super(id, 'IT');
        this.lastReport = reports[0]
    }

    addEmployee( name: string ) {
        if ( name === 'Max' ) {
            return
        }
        this.employees.push( name )
    }

    addReports( text: string ) {
        this.reports.push( text )
        this.lastReport = text;
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

IT.mostRecentReport = 'Year and report'
console.log( IT.mostRecentReport );


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();