// Is array copied? 
// let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let 
// shoppingCart = fruits; shoppingCart.push("Banana"); // what's in fruits? 
// alert( fruits.length ); // ? 

// ans :-

// In the given code, the array is not copied. Instead, the variable shoppingCart is assigned a reference to the same array as fruits. So any modifications made through shoppingCart will also affect fruits because they both refer to the same array in memory.

//  Explanation of the code:

// javascript
let fruits = ["Apples", "Pear", "Orange"];  // original array
let shoppingCart = fruits;  // both shoppingCart and fruits point to the same array
shoppingCart.push("Banana");  // "Banana" is added to the shared array
console.log( fruits.length );  // fruits.length is now 4
// 

// After the shoppingCart.push("Banana"); statement, the array now contains:
// - "Apples", "Pear", "Orange", and "Banana"

//  So, the output of alert(fruits.length) will be:
// 4

// Since shoppingCart and fruits refer to the same array, adding "Banana" to shoppingCart also modifies fruits.