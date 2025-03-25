function checkSignUp(){
    let isValid = true;

    const errors = document.querySelectorAll("error");
    errors.forEach(error => error.textContent = "");

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z]$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Full Name
    if (!namePattern.test(fullName)) {
        document.getElementById("fullNameError").textContent = "Format: First Last Initial (Example: John Doe S)";
        isValid = false;
    }

    // Date of Birth
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        isValid = false;
    }
    // Gender
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select a gender.";
        isValid = false;
    }

    // Blood Group
    if (bloodGroup === "") {
        document.getElementById("bloodGroupError").textContent = "Please select a blood group.";
        isValid = false;
    }

    // Email
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format (example@mail.com)";
        isValid = false;
    }

    // Phone
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Address
    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        isValid = false;
    }

    // Username
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    }

    // Password
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // Confirm password
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

function validateSignUpForm(){
    if(checkSignUp()){
        alert("Sign Up successful");
        return true;
    }

    return false;
}