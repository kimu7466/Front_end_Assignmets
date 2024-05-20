// Q.22 Check Number Is Positive or Negative in JavaScript?

// ans:


function checkNumberSign(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


console.log(checkNumberSign(5)); 
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0)); 
