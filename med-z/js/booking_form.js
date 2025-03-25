function validateForm() {
    let isValid = true; 

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const doctor = document.getElementById("doctor").value.trim();
    const illness = document.getElementById("illness").value.trim();
    const date = document.getElementById("date").value.trim();
    const time = document.getElementById("time").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const doctorError = document.getElementById("doctorError");
    const illnessError = document.getElementById("illnessError");
    const dateError = document.getElementById("dateError");
    const timeError = document.getElementById("timeError");
    const messageError = document.getElementById("messageError");

    // Reset previous error messages
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    doctorError.innerText = "";
    illnessError.innerText = "";
    dateError.innerText = "";
    timeError.innerText = "";
    messageError.innerText = "";

    // regex patterns
    const namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z]$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Validate name
    if (!namePattern.test(name)) {
        nameError.innerText = "Format: First Last Initial (Example: John Doe S)";
        isValid = false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format (example@mail.com)";
        isValid = false;
    }

    // Validate phone number
    if (!phonePattern.test(phone)) {
        phoneError.innerText = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Validate doctor selection
    if (doctor === "") {
        doctorError.innerText = "Please select a doctor";
        isValid = false;
    }

    // Validate illness/reason
    if (illness.length < 10) {
        illnessError.innerText = "Description must be at least 10 characters";
        isValid = false;
    }

    // Validate date (must not be past)
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (date < today) {
        dateError.innerText = "Cannot select a past date";
        isValid = false;
    }

    // Validate time (must be during working hours)
    const [hour, minute] = time.split(":");
    const timeHour = parseInt(hour, 10);
    if (timeHour < 9 || timeHour > 17) {
        timeError.innerText = "Select a time between 9 AM - 5 PM";
        isValid = false;
    }

    // Validate additional message (optional, but must be within a limit)
    if (message.length > 200) {
        messageError.innerText = "Message must be under 200 characters";
        isValid = false;
    }

    return isValid; // Prevent submission if any validation fails
}

function validateBookingForm(){
    if(validateForm()){
        alert("Form Submitted");
        return true;
    }

    return false;
}   