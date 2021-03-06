function add(n1, n2) {
    return n1 + n2;
}
// The return type is a void type
function printResult1(num) {
    console.log('Result: ' + num);
    // the function doesn't esplcitly return anything, which means that typescpit would consider the outcome void
}
function printResult2(num) {
    console.log('Result: ' + num);
    return;
    // the function returns nothing but it still contains return, which would be euqual to undefined
}
// Esplicitely declaring the form of the callback functions
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
printResult1(add(5, 12));
// Asserting that combinedValue shoudl hold a function, with two parameters number, returning a number
var combinedValue;
combinedValue = add;
// combinedValue = printResult1 -----> combinedValue must hold a function with the parameters number, returning a number *ERROR*
// combinedValue = 5; -----> combinedValue must hold a function *ERROR*
console.log(combinedValue(8, 8));
