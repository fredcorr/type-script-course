"use strict";
function merge(objsA, objsB) {
    return Object.assign(objsA, objsB);
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 value';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' value';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
