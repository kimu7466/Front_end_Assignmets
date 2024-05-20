// Q.42 Write a JavaScript program to compare two objects? 

function deepEqual(obj1, obj2) {

    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (!keys2.includes(key)) {
                return false;
            }

            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    } else {
        return obj1 === obj2;
    }
}

let objA = {
    name: "Imroz",
    age: 25,
    address: {
        city: "Rajasthan",
        zip: "327001"
    }
};

let objB = {
    name: "Imroz",
    age: 25,
    address: {
        city: "Rajasthan",
        zip: "327001"
    }
};

let objC = {
    name: "Urvashi",
    age: 18,
    address: {
        city: "Gujrat",
        zip: "395001"
    }
};

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false

