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
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Bacon');
function createCourse(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
