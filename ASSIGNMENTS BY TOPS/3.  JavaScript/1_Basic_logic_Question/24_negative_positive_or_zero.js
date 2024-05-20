// Q.24 Write to check whether a number is negative, positive or zero?


// ans:


function checkNumber(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(5)); 
console.log(checkNumber(-5));
console.log(checkNumber(0)); 
