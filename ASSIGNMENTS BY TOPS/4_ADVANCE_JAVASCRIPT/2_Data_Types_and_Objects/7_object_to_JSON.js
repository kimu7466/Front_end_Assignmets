// Turn the object into JSON and back Turn the user into JSON and then read it back 
// into another variable. 
// user = { name: "John Smith", age: 35}; 
// ans:-

let user = { name: "John Smith", age: 35 };

// Convert the user object to JSON
let userJSON = JSON.stringify(user);

console.log(userJSON); // Outputs: '{"name":"John Smith","age":35}'

// Convert JSON back to an object
let userParsed = JSON.parse(userJSON);

console.log(userParsed); // Outputs: { name: 'John Smith', age: 35 }
