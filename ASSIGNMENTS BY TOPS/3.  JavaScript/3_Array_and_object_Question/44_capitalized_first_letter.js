// Q.44 Write a JavaScript program to capitalize first letter of a string? 


function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const inputString = "hello world";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString); 


