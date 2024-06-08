document.addEventListener('DOMContentLoaded', function() {

    let number1Input = document.getElementById("number1")    
    let number2Input = document.getElementById("number2")    
    let sum_btn = document.getElementById("sum")
    let sub_btn = document.getElementById("sub")
    let mul_btn = document.getElementById("mul")
    let div_btn = document.getElementById("div")
    let mod_btn = document.getElementById("mod")
    let answer_span = document.getElementById("answer")


    sum_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let answer = number1 + number2;
        answer_span.innerText = `Addition = ${answer}`;
    })
    sub_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let answer = number1 - number2;
        answer_span.innerText = `Subtraction = ${answer}`;
    })
    mul_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let answer = number1 * number2;
        answer_span.innerText = `Multiplication = ${answer}`;
    })
    div_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let answer = number1 / number2;
        answer_span.innerText = `division = ${answer}`;
    })
    mod_btn.addEventListener("click",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let answer = number1 % number2;
        answer_span.innerText = `Modulas = ${answer}`;
    })
});
