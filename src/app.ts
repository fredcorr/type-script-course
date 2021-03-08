interface AddFn {
 (a: number, b: number ) : number  
}

let add: AddFn;

add = ( n1: number, n2: number ) => {
    return n1 + n2
};


interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet( phrase: string ): void
}

let user1: Greetable;

class Person implements Greetable {

    readonly name: string;
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
