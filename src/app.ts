interface Greetable {
    name: string;
    greet( phrase: string ): void
}

let user1: Greetable;

class Person implements Greetable {

    name: string;
    age = 30

    constructor( n: string ) {
        this.name = n
    }

    greet( phrase: string ) {
        console.log( phrase + ' ' + this.name );
        
    }

}

user1 = new Person( 'Max' )
user1.greet( 'Hi there + I ' )
console.log( user1 );
