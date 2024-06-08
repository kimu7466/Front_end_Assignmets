document.addEventListener("DOMContentLoaded", ()=>{

    let result_btn = document.getElementById("result") ;

    let clang = document.getElementById("clang") ;
    let cpp = document.getElementById("cpp") ;
    let dbms = document.getElementById("dbms") ;
    let html = document.getElementById("html") ;
    let css = document.getElementById("css") ;
    let php = document.getElementById("php") ;
    let java = document.getElementById("java") ;
    
    let clang_msg = document.getElementById("clang_msg") ;
    let cpp_msg = document.getElementById("cpp_msg") ;
    let dbms_msg = document.getElementById("dbms_msg") ;
    let html_msg = document.getElementById("html_msg") ;
    let css_msg = document.getElementById("css_msg") ;
    let php_msg = document.getElementById("php_msg") ;
    let java_msg = document.getElementById("java_msg") ;
    
    function check_marks(marks, msg) {
        const regex = /^[0-9]+$/;
        if (marks === "") {
            msg.innerText = "Enter marks";
            msg.style.color = "red"
            return false;
        } else if (!regex.test(marks)) {
            msg.innerText = "Invalid values";
            msg.style.color = "red"
            return false;
        } else if (parseInt(marks) > 50) {
            msg.innerText = "Invalid marks";
            msg.style.color = "red"
            return false;
        } else if (parseInt(marks) <= 18) {
            msg.innerText = "fail";
            msg.style.color = "red"
            return true;
        } else if (parseInt(marks) >= 19 && parseInt(marks) <= 50) {
            msg.innerText = "pass";
            msg.style.color = "green"
            return true;
        } else {
            msg.innerText = "";
            return true;
        }
    }

    clang.addEventListener("blur", ()=> check_marks( clang.value , clang_msg)) ;
    cpp.addEventListener("blur", ()=> check_marks( cpp.value , cpp_msg)) ;
    dbms.addEventListener("blur", ()=> check_marks( dbms.value , dbms_msg)) ;
    html.addEventListener("blur", ()=> check_marks( html.value , html_msg)) ;
    css.addEventListener("blur", ()=> check_marks( css.value , css_msg)) ;
    php.addEventListener("blur", ()=> check_marks( php.value , php_msg)) ;
    java.addEventListener("blur", ()=> check_marks( java.value , java_msg)) ;

    clang.addEventListener("keyup", ()=> check_marks( clang.value , clang_msg)) ;
    cpp.addEventListener("keyup", ()=> check_marks( cpp.value , cpp_msg)) ;
    dbms.addEventListener("keyup", ()=> check_marks( dbms.value , dbms_msg)) ;
    html.addEventListener("keyup", ()=> check_marks( html.value , html_msg)) ;
    css.addEventListener("keyup", ()=> check_marks( css.value , css_msg)) ;
    php.addEventListener("keyup", ()=> check_marks( php.value , php_msg)) ;
    java.addEventListener("keyup", ()=> check_marks( java.value , java_msg)) ;

    

    result_btn.addEventListener("click", ()=>{

        let clang_marks = parseFloat(clang.value) ;
        let cpp_marks = parseFloat(cpp.value) ;
        let dbms_marks = parseFloat(dbms.value) ;
        let html_marks = parseFloat(html.value) ;
        let css_marks = parseFloat(css.value) ;
        let php_marks = parseFloat(php.value) ;
        let java_marks = parseFloat(java.value) ;

        let valid_clang = check_marks( clang_marks , clang_msg) ;
        let valid_cpp = check_marks( cpp_marks , cpp_msg) ;
        let valid_dbms = check_marks( dbms_marks , dbms_msg) ;
        let valid_html = check_marks( html_marks , html_msg) ;
        let valid_css = check_marks( css_marks , css_msg) ;
        let valid_php = check_marks( php_marks , php_msg) ;
        let valid_java = check_marks( java_marks , java_msg) ;

        if ( !valid_clang || !valid_cpp || !valid_dbms || !valid_html || ! valid_css || !valid_php || !valid_java ){
            document.getElementById("sheet_msg").innerText = "fill all fields properly"
            return
            }
            
        document.getElementById("sheet_msg").innerText = ""

        // total marks 
        let total_marks = clang_marks + cpp_marks + dbms_marks + html_marks + css_marks + php_marks + java_marks ;
        
        let total_marks_element = document.getElementById("total_marks") ;
        let bool_element = document.getElementById("bool") ;
        
        // percentage 
        let percentage_element = document.getElementById("percentage") ;
        total_marks_element.innerText = total_marks ;
        let percentage = (total_marks / 350) * 100 ;
        percentage_element.innerText = percentage.toFixed(2) ;
        
        // bool for pass / fail and
        // FAIL = if fail in any subject and 
        // FAIL = if percentage < 36 
        
        clang_pass = clang_marks > 18
        cpp_pass = cpp_marks > 18
        dbms_pass = dbms_marks > 18
        html_pass = html_marks > 18
        css_pass = css_marks > 18
        php_pass = php_marks > 18
        java_pass = java_marks > 18
        
        
        
        if ( !clang_pass || !cpp_pass || !dbms_pass || !html_pass || ! css_pass || !php_pass || !java_pass ){
            bool_element.innerText = "FAIL"
            bool_element.style.color = "red"
        }
        else if (percentage < 36){
            bool_element.innerText = "FAIL"
            bool_element.style.color = "red"
        }
        else{
            bool_element.innerText = "PASS"
            bool_element.style.color = "green"
        }

        document.getElementById("download_pdf").style.display = 'block';
        document.getElementById("print_pdf").style.display = 'block';
            
    })
 
    document.getElementById("download_pdf").addEventListener("click", ()=>{
        document.getElementById("download_pdf").style.display = 'none';
        document.getElementById("result").style.display = 'none';
        document.getElementById("print_pdf").style.display = 'none';
        
        let element =  document.getElementById("marksheet");
        
        html2pdf()
        .from(element)
        .save();
        
        setTimeout(()=>{
            document.getElementById("download_pdf").style.display = 'block';
            document.getElementById("print_pdf").style.display = 'block';
            document.getElementById("result").style.display = 'block';
        }, 50)

    })

    document.getElementById("print_pdf").addEventListener("click", ()=>{
        document.getElementById("download_pdf").style.display = 'none';
        document.getElementById("print_pdf").style.display = 'none';
        document.getElementById("result").style.display = 'none';
        
        window.print()
        
        setTimeout(()=>{
            document.getElementById("download_pdf").style.display = 'block';
            document.getElementById("print_pdf").style.display = 'block';
            document.getElementById("result").style.display = 'block';
        }, 50)

    })

})