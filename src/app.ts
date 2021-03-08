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