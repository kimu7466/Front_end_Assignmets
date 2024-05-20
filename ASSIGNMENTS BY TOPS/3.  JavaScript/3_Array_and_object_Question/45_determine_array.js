// Q. 45 Write a JavaScript program to determine if a variable is array?


function isArray(variable) {
    return Array.isArray(variable);
}

const arr = [1, 2, 3];
const notArr = "This is not an array";

console.log(isArray(arr));     
console.log(isArray(notArr));  

