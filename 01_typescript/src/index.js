function addNumbers(a, b) {
    return a + b;
}
var myNumber = 5;
var myString = "Hello";
var myArray = [1, 2, 3];
function printArray(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
}
printArray(myArray);
console.log(addNumbers(myNumber, 10));
