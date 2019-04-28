// challenge
function addTwo(value) {
    return value + 2
}
console.log(addTwo(3));
console.log(addTwo(10));

// challenge 2
function addS(value) {
    return value+'S'
}
console.log(addS('pizza'));
console.log(addS('bagel'));

var arr = [1,75,12,4,5];
function multiplyByTwo(num) {
    return num*4
}

function map(arr, multiplyByTwo) {
    var newarr = [];
    for (let i = 0; i < arr.length; i++) {
    newarr.push(multiplyByTwo(arr[i]));
        
    }
    return newarr;
} 
console.log(map(arr, multiplyByTwo));

var alphabet = "";
var letters = ['a','b','c','d'];
function callback(char) {
    alphabet+= char
}
function forEach1(letters, callback) {
    for (let i = 0; i < letters.length; i++) {
        callback(letters[i]);
    }
    console.log(alphabet)
}
forEach1(letters, callback)

function mapWith(arr, multiplyByTwo) {
    var newarr = [];
    arr.forEach(i => {newarr.push(multiplyByTwo(arr[i]))})
}
console.log(mapWith(arr, multiplyByTwo));