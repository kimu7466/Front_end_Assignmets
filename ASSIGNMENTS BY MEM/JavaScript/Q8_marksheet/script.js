document.addEventListener("DOMContentLoaded", ()=>{

    let result_btn = document.getElementById("result") ;

    let clang = document.getElementById("clang") ;
    let cpp = document.getElementById("cpp") ;
    let dbms = document.getElementById("dbms") ;
    let html = document.getElementById("html") ;
    let css = document.getElementById("css") ;
    let php = document.getElementById("php") ;
    let java = document.getElementById("java") ;
    
    
    result_btn.addEventListener("click", ()=>{

        let clang_marks = clang.value || 0 ;
        let cpp_marks = cpp.value || 0 ;
        let dbms_marks = dbms.value || 0 ;
        let html_marks = html.value || 0 ;
        let css_marks = css.value || 0 ;
        let php_marks = php.value || 0 ;
        let java_marks = java.value || 0 ;

        let total_marks = parseFloat(clang_marks) + parseFloat(cpp_marks) + parseFloat(dbms_marks) + parseFloat(html_marks) + parseFloat(css_marks) + parseFloat(php_marks) + parseFloat(java_marks) ;
        
        let total_marks_element = document.getElementById("total_marks") ;
        let percentage_element = document.getElementById("percentage") ;
        let bool_element = document.getElementById("bool") ;
        
        total_marks_element.innerText = total_marks ;
        
        let percentage = (total_marks / 350) * 100 ;

        percentage_element.innerText = percentage.toFixed(2) ;

        bool_element.innerText = "pass"

    })

})