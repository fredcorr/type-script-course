"use strict";
function merge(objsA, objsB) {
    return Object.assign(objsA, objsB);
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);
