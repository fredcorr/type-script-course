"use strict";
function merge(objsA, objsB) {
    return Object.assign(objsA, objsB);
}
const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
