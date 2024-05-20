// Q.46 Write a JavaScript program to clone an array? 

// ans:-

function cloneArray(arr) {
    return arr.slice();
}

const originalArray = [1, 2, 3];
const clonedArray = cloneArray(originalArray);

console.log(originalArray); 
console.log(clonedArray);   
console.log(originalArray === clonedArray); 
