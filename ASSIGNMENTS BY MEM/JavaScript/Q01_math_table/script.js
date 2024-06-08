let display_button = document.getElementById("btn1")
let ul = document.querySelector("ul")
let table = document.querySelector(".table")

table.style.display = 'none';

display_button.addEventListener("click",()=>{
    
    number = document.getElementById("number").value
    ul.innerHTML = ""
    
    for (let index = 1; index <= 10; index++) {
        let li = document.createElement("li")
        li.textContent = `${number} X ${index} = ${number*index}`
        ul.appendChild(li)
        
        table.style.display = 'block';
        // console.log(`${number} X ${index} = ${number*index}`);
    }

    // console.log(number);
})

