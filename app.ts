function combine( 
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-numbers' | 'as-text' 
    ) { 
    let result;
    if ( typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-numbers' ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine( 30, 26, 'as-numbers' );
console.log( combinedAges );

const combinedStringAges = combine( '30', '26', 'as-numbers' )
console.log( combinedStringAges );


const combinedNames = combine( 'Max', 'Anna', 'as-text' );
console.log( combinedNames );
