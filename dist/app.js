"use strict";
const e1 = {
    name: 'Max',
    priveleges: ['create-server'],
    startDate: new Date()
};
function add(n1, b) {
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('priveleges' in emp) {
        console.log('Privilage: ' + emp.priveleges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo:...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.fyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
        default:
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', fyingSpeed: 10 });
const userInpurElement = document.getElementById('user-input');
userInpurElement.value = 'Hi there';
