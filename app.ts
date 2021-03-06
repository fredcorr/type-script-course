function add( n1: number, n2: number ) { 
    return n1 + n2;
}

// The return type is a void type
function printResult1( num: number ): void {
    console.log( 'Result: ' + num );
    // the function doesn't esplcitly return anything, which means that typescpit would consider the outcome void
}

function printResult2( num: number ):undefined {
    console.log( 'Result: ' + num );
    return;
    // the function returns nothing but it still contains return, which would be euqual to undefined
}

printResult1( add( 5, 12 ) )