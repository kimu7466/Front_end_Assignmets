let password = document.querySelector("#password")
let checkbox = document.querySelector("#checkbox")

checkbox.addEventListener("change", () => {
    if (checkbox.checked){
        password.type = 'text';
    }
    else{
        password.type = "password";
    }  
})
