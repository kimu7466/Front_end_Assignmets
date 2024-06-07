document.addEventListener('DOMContentLoaded', function() {

    let numberInput = document.getElementById("number")    
    let check_btn = document.getElementById("check")
    let answer_span = document.getElementById("answer")


    check_btn.addEventListener("click",()=>{
        
        if ( (numberInput.value)%2 == 0 ){
            answer_span.innerText = "number is even"
        }
        else{
            answer_span.innerHTML = "number is odd"
        }
        
    })
});
