document.addEventListener('DOMContentLoaded', function() {

    let number1Input = document.getElementById("number1")    
    let number2Input = document.getElementById("number2")    
    let check_btn = document.getElementById("display")
    let answer_span = document.getElementById("answer")


    check_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        if ( number1 < number2 ){
            answer_span.innerText = `${number1} is minimum`
        }
        else if ( number2 < number1 ){
            answer_span.innerText = `${number2} is minimum`
        }
        else{
            answer_span.innerHTML = "both are equal"
        }
        
    })
});
