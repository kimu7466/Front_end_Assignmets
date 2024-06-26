// Q.37 Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125



const numRows = 5;

for (let i = 1; i <= numRows; i++) {
    let row = "";
    
    row += i + " ";
    
    for (let j = 1; j <= 4; j++) {

        let value = (j === 1) ? 1 :Math.pow(i, j-1);
        
        row += value + " ";
    }
    
    console.log(row);
}



// 1 1 1 1 1 
// 2 1 2 4 8 
// 3 1 3 9 27 
// 4 1 4 16 64 
// 5 1 5 25 125 