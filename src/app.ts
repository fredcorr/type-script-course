function Logger(logString: string) {
    return function( constructor: Function ) {
        console.log( logString );
        console.log( constructor );
    }
}

function WithTemplate( template: string, hookId: string ) {
    return function( constructor: any ) {
        const hookElement = document.getElementById( hookId );
        const p = new constructor()
        if ( hookElement ) {
            hookElement.innerHTML = template;
            hookElement.querySelector( 'h1' )!.textContent = p.name
        }
    }
}

@WithTemplate( '<h1>Person Object</h1>', 'App' )
class Person {
    name = 'Max';

    constructor() {
        console.log( 'Creating person object' );
        
    }
}

const pers = new Person();

console.log( pers );
