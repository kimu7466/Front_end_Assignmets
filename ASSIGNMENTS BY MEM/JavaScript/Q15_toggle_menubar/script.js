document.addEventListener("DOMContentLoaded",()=>{
    let togglebtn = document.getElementById("togglebtn")

    togglebtn.addEventListener("click", ()=>{
        document.querySelector("aside").style.display = "block";
    })  

    let closebtn = document.getElementById("closebtn")

    closebtn.addEventListener("click", ()=>{
        document.querySelector("aside").style.display = "none";
    })  

})