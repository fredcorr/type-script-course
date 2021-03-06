// Normal object
// const person: {
//     name: string,
//     age: number
// } = {
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: [ 'Sports', 'Cooking' ]
}

// Telling typescript that this var is an array of strings
let favouriteActivities: string[]; 

console.log( person.name );

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