"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
user1 = new Person('Max');
user1.greet('Hi there + I ');
console.log(user1);
