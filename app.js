var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// Normal object
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// Telling typescript that this var is an array of strings
var favouriteActivities;
// person.role[1] = 10; ----> It's an ERROR
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
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
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
