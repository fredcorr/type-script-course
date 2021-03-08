class Department {
    protected employees: string[] = [] 
    static fiscalYear = 2020;

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

    static createEmployee( name:string ) {
        return { name: name }
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

const employee1 = Department.createEmployee('Max')
console.log( employee1, Department.fiscalYear );


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();