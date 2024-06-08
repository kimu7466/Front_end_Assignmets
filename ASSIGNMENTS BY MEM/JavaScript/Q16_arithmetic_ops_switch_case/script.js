document.addEventListener('DOMContentLoaded', function() {

    let number1Input = document.getElementById("number1")    
    let number2Input = document.getElementById("number2")    
    let select_operatopn = document.getElementById("operation")
    let answer_span = document.getElementById("answer")


    select_operatopn.addEventListener("change",()=>{
        let number1 = parseFloat(number1Input.value)
        let number2 = parseFloat(number2Input.value)

        let operation = select_operatopn.value;
        let answer = "";

        switch (operation) {
            case "sum":
                answer = number1 + number2;
                break;
            case "sub":
                answer = number1 - number2;
                break;
            case "mul":
                answer = number1 * number2;
                break;
            case "div":
                answer = number1 / number2;
                break;
            case "mod":
                answer = number1 % number2;
                break;
        
            default:
                answer = "";
                break;
        }

        answer_span.innerText = `${answer}`
        
    })
});
