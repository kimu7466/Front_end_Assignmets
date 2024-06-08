document.addEventListener('DOMContentLoaded', function () {

    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let gender = document.getElementsByName('gender');
    let address = document.getElementById('address');
    let city = document.getElementById('city');
    let mobile = document.getElementById('mobile');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let c_password = document.getElementById('c_password');
    let submit = document.getElementById('submit');

    let firstname_msg = document.getElementById('firstname_msg');
    let lastname_msg = document.getElementById('lastname_msg');
    let gender_msg = document.getElementById('gender_msg');
    let address_msg = document.getElementById('address_msg');
    let city_msg = document.getElementById('city_msg');
    let mobile_msg = document.getElementById('mobile_msg');
    let email_msg = document.getElementById('email_msg');
    let password_msg = document.getElementById('password_msg');
    let c_password_msg = document.getElementById('c_password_msg');
    let submit_msg = document.getElementById('submit_msg');

    let nameRegex = /^[A-Za-z]+$/;
    let mobileRegex = /^\d{10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.querySelectorAll('.password i').forEach(eyeIcon => {
        eyeIcon.addEventListener('click', () => {
            let input = eyeIcon.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            }
        });
    });

    function validateFirstName() {
        if (!firstname.value.match(nameRegex)) {
            firstname_msg.textContent = "Firstname should contain only alphabets.";
            firstname_msg.style.display = "block";
            return false;
        } else {
            firstname_msg.textContent = "";
            firstname_msg.style.display = "none";
            return true;
        }
    }

    function validateLastName() {
        if (!lastname.value.match(nameRegex)) {
            lastname_msg.textContent = "Lastname should contain only alphabets.";
            lastname_msg.style.display = "block";
            return false;
        } else {
            lastname_msg.textContent = "";
            lastname_msg.style.display = "none";
            return true;
        }
    }

    function validateGender() {
        if (![...gender].some(g => g.checked)) {
            gender_msg.textContent = "Gender is required.";
            gender_msg.style.display = "block";
            return false;
        } else {
            gender_msg.textContent = "";
            gender_msg.style.display = "none";
            return true;
        }
    }

    function validateAddress() {
        if (address.value.length < 35 || address.value.length > 200) {
            address_msg.textContent = "Address must be between 35 to 200 characters.";
            address_msg.style.display = "block";
            return false;
        } else {
            address_msg.textContent = "";
            address_msg.style.display = "none";
            return true;
        }
    }

    function validateCity() {
        if (!city.value) {
            city_msg.textContent = "City is required.";
            city_msg.style.display = "block";
            return false;
        } else {
            city_msg.textContent = "";
            city_msg.style.display = "none";
            return true;
        }
    }

    function validateMobile() {
        if (!mobile.value.match(mobileRegex)) {
            mobile_msg.textContent = "Mobile number should be exactly 10 digits.";
            mobile_msg.style.display = "block";
            return false;
        } else {
            mobile_msg.textContent = "";
            mobile_msg.style.display = "none";
            return true;
        }
    }

    function validateEmail() {
        if (!email.value.match(emailRegex)) {
            email_msg.textContent = "Please enter a valid email address.";
            email_msg.style.display = "block";
            return false;
        } else {
            email_msg.textContent = "";
            email_msg.style.display = "none";
            return true;
        }
    }

    function validatePassword() {
        if (password.value.length < 8 || password.value.length > 15) {
            password_msg.textContent = "Password must be between 8 to 15 characters.";
            password_msg.style.display = "block";
            return false;
        } else {
            password_msg.textContent = "";
            password_msg.style.display = "none";
            return true;
        }
    }

    function validateConfirmPassword() {
        if (c_password.value !== password.value) {
            c_password_msg.textContent = "Passwords do not match.";
            c_password_msg.style.display = "block";
            return false;
        } else {
            c_password_msg.textContent = "";
            c_password_msg.style.display = "none";
            return true;
        }
    }

    function validateForm() {
        let valid = true;
        valid = validateFirstName() && valid;
        valid = validateLastName() && valid;
        valid = validateGender() && valid;
        valid = validateAddress() && valid;
        valid = validateCity() && valid;
        valid = validateMobile() && valid;
        valid = validateEmail() && valid;
        valid = validatePassword() && valid;
        valid = validateConfirmPassword() && valid;

        if (!valid) {
            submit_msg.textContent = "Please fix the errors above.";
            submit_msg.style.display = "block";
        } else {
            submit_msg.textContent = "";
            submit_msg.style.display = "none";
        }
        return valid;
    }

    firstname.addEventListener('blur', validateFirstName);
    lastname.addEventListener('blur', validateLastName);
    address.addEventListener('blur', validateAddress);
    city.addEventListener('blur', validateCity);
    mobile.addEventListener('blur', validateMobile);
    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);
    c_password.addEventListener('blur', validateConfirmPassword);
    gender.forEach(g => g.addEventListener('blur', validateGender));

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        if (validateForm()) {
            submit_msg.textContent = "Form submitted successfully!";
            submit_msg.style.color = "green";
            submit_msg.style.display = "block";
        }
    });
});
