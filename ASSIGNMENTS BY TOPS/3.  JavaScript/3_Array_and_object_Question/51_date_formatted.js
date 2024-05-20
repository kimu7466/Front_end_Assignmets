// Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,
// mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy? 


function formatDate(date) {

    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    const mm_dd_yyyy_dash = `${month}-${day}-${year}`;
    const mm_dd_yyyy_slash = `${month}/${day}/${year}`;
    const dd_mm_yyyy_dash = `${day}-${month}-${year}`;
    const dd_mm_yyyy_slash = `${day}/${month}/${year}`;

    return {
        mm_dd_yyyy_dash,
        mm_dd_yyyy_slash,
        dd_mm_yyyy_dash,
        dd_mm_yyyy_slash
    };
}

const currentDate = new Date();

const formattedDates = formatDate(currentDate);

console.log("mm-dd-yyyy:", formattedDates.mm_dd_yyyy_dash);
console.log("mm/dd/yyyy:", formattedDates.mm_dd_yyyy_slash);
console.log("dd-mm-yyyy:", formattedDates.dd_mm_yyyy_dash);
console.log("dd/mm/yyyy:", formattedDates.dd_mm_yyyy_slash);
