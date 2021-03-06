enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 300 }

// Normal object
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: [ 'Sports', 'Cooking' ],
    role: Role.ADMIN
}

// Telling typescript that this var is an array of strings
let favouriteActivities: string[];
// person.role[1] = 10; ----> It's an ERROR

for ( const hobby of person.hobbies ) {
    console.log( hobby.toUpperCase() );
    // console.log( hobby.map() ) ---> ERROR!! hobby is not an array
}

// Nested object
// const product: {
//     id: string;
//     price: number;
//     tags: string[],
//     details: {
//       title: string;
//       description: string;
//     }
//   } = {
const product ={
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

if ( person.role === Role.ADMIN ) {
    console.log( 'is admin' );
    
}