// const names : Array<string | number > = []

// const promise: Promise<string> = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         resolve('this is done!')
//     }, 2000 )
// }) 

// promise.then(data => {
//     data.split( ' ' )
// })

function merge<T extends object, U extends object>(objsA: T, objsB: U) {
    return Object.assign( objsA, objsB )
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30} );
console.log( mergeObj );


