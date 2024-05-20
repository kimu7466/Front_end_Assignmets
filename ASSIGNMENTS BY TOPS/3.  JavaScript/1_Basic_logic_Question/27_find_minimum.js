// Q.27 Write to find minimum number among 3 numbers using ternary operator in JS?

// ans:

function findMin(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
}

console.log(findMin(5, 8, 3)); 

