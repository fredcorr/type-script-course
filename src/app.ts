type Admin = {
 name: string
 priveleges: string[]   
}

type Employee = {
    name: string;
    startDate: Date;
}

type elevateEmployee = Admin & Employee;

const e1: elevateEmployee = {
    name: 'Max',
    priveleges: [ 'create-server' ],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/// FUNCTION OVERLOAD
function add(a:number, b: number) : number;
function add(a:string, b: string) : string;
function add(a:Combinable, b: Combinable) {
   if ( typeof a === 'string' || typeof b === 'string' ) {
       return a.toString() + b.toString();
   }

   return a + b
}

const result = add( 'Freddie', 'Corradi' )
result.split( ' ' );

// OPTIONAL CHASING
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My company' }
}

console.log( fetchedUserData?.job?.title );

// Nulishing Coalescing
const userInput = undefined;
const storedData = userInput ?? 'DEFAULT';
console.log( storedData );


type UknownEmployee = Employee | Admin;

function  printEmployeeInformation(emp:UknownEmployee) {
    console.log( 'Name: ' + emp.name);
    if ( 'priveleges' in emp ) {
        console.log( 'Privilage: ' + emp.priveleges );
    }
    if ( 'startDate' in emp ) {
        console.log( 'Start Date: ' + emp.startDate );
    }
}

printEmployeeInformation( e1 )

class Car {
    drive() {
        console.log( 'Driving...' );
        
    }
}

class Truck {
    drive() {
        console.log( 'Driving truck...' );
        
    }

    loadCargo( amount: number ) {
        console.log( 'Loading cargo:...' + amount );
        
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if( vehicle instanceof Truck ) {
        vehicle.loadCargo(1000)
    }
}

useVehicle( v1 )
useVehicle( v2 )

interface Bird {
    type: 'bird';
    fyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal( animal:Animal ) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.fyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
        default:
            break;
    }
    
    console.log( 'Moving with speed: ' + speed );
}
 
moveAnimal( { type: 'bird', fyingSpeed: 10 } )

// const userInpurElement = <HTMLInputElement>document.getElementById('message-output')!;
// REACT WAY
const userInpurElement = document.getElementById('user-input')! as HTMLInputElement;
userInpurElement.value = 'Hi there';


interface ErrorContainer {
    [key: string]: string 
}

const emailError: ErrorContainer = {
    email: 'not a valid email',
    username: 'Must start with a capital'
}

console.log( emailError );



