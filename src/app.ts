interface AddFn {
 (a: number, b: number ) : number  
}

let add: AddFn;

add = ( n1: number, n2: number ) => {
    return n1 + n2
};


interface Named {
    readonly name?: string
    outputName?: string;
}

interface Greetable extends Named {
    greet( phrase: string ): void
}

let user1: Greetable;

class Person implements Greetable {

    readonly name?: string;
    age = 30

    constructor( n?: string ) {
        if (n) {
            this.name = n
        }
    }

    greet( phrase: string ) {
        if ( this.name ) {
            console.log( phrase + ' ' + this.name );
        } else {
            console.log( 'Hi' );
            
        }
    }

}

user1 = new Person( )
user1.greet( 'Hi there + I ' )
console.log( user1 );
