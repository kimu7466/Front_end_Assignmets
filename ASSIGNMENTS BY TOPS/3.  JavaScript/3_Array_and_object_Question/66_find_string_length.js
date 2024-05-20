// Q.66 Find the length of a string without using libraryFunction?



function findStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

const myString = 'Hello, world!';
console.log(findStringLength(myString));