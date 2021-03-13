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

@Logger( 'Error' )
@WithTemplate( '<h1>Person Object</h1>', 'App' )
class Person {
    name = 'Max';

    constructor() {
        console.log( 'Creating person object' );
        
    }
}

const pers = new Person();

console.log( pers );

function Log( target: any, propertName: string | Symbol ){
    console.log( 'Property decorator' );
    console.log( target, propertName ); 
}

function Log2( target: any, name: string, descriptor: PropertyDescriptor ) {
    console.log( 'Accessor decorator' );
    console.log( target );
    console.log( name );
    console.log( descriptor );
}  

function Log3( target: any, name: string, descriptor: PropertyDescriptor ) {
    console.log( 'Method decorator' );
    console.log( target );
    console.log( name );
    console.log( descriptor );
}

function Log4( target: any, name: string | Symbol , position: number ) {
    console.log( 'Parameter decorator' );
    console.log( target );
    console.log( name );
    console.log( position );
}

class Product {

    @Log title: string
    constructor( t:string,  private _price: number ) {
        this.title = t
    }

    @Log2
    set price( val: number ) {
        if ( val > 0 ) {
            this._price = val   
        } else {
            console.log( 'invalid price should positive' );
        }
    }

    @Log3 getPriceWithTax( @Log4 tax: number ) {
        return this.price * ( 1 + tax )
    }
}
