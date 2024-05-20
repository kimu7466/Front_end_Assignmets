// Q.43 Write a JavaScript program to convert an array of objects into CSV string? 

// ans:-

function arrayToCSV(array) {
    if (array.length === 0) {
        return "";
    }
    const headers = Object.keys(array[0]);
    const csvRows = [];

    csvRows.push(headers.join(","));
    console.log(csvRows);
    
    for (const obj of array) {
        const values = headers.map(header => {
            const escaped = ('' + obj[header]).replace(/"/g, '""'); 
            return `"${escaped}"`; 
        });
        csvRows.push(values.join(","));
    }
    return csvRows.join("\n");
}

const data = [
    { name: "Imroz",occupation: "teacher" ,age: 25, city: "Rajasthan" },
    { name: "Urvashi",occupation: "teacher" ,age: 18, city: "Gujrat" },
];

const csvString = arrayToCSV(data);
console.log(csvString);
