document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["registrationForm"];
  console.log(form.name);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    let isValid = true;

    // Validate Username
    const username = document.forms["registrationForm"]["username"];
    if (username.value.trim() === "") {
      showError(username, "Username is required");
      isValid = false;
    } else {
      showSuccess(username);
    }

    // Validate Email
    const email = document.forms["registrationForm"]["email"];
    if (!isValidEmail(email.value.trim())) {
      showError(email, "Enter a valid email");
      isValid = false;
    } else {
      showSuccess(email);
    }

    // Validate Password
    const password = document.forms["registrationForm"]["password"];
    if (!isValidPassword(password.value)) {
      showError(
        password,
        "Password must be 8+ chars, include 1 uppercase, 1 number"
      );
      isValid = false;
    } else {
      showSuccess(password);
    }

    // Validate Confirm Password
    const confirmPassword =
      document.forms["registrationForm"]["confirmPassword"];
    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    } else {
      showSuccess(confirmPassword);
    }

    // Validate Phone Number
    const phone = document.forms["registrationForm"]["phone"];
    if (!isValidPhone(phone.value.trim())) {
      showError(phone, "Enter a valid phone number");
      isValid = false;
    } else {
      showSuccess(phone);
    }

    // If form is valid, simulate server validation
    if (isValid) {
      alert("Form Submitted Successfully!");
      form.reset(); // Reset the form
    }
  });

  // Helper functions
  function showError(input, message) {
    const small = input.nextElementSibling;
    small.textContent = message;
    small.style.visibility = "visible";
    input.style.border = "1px solid red";
  }

  function showSuccess(input) {
    const small = input.nextElementSibling;
    small.style.visibility = "hidden";
    input.style.border = "1px solid green";
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }

  function isValidPhone(phone) {
    const regex = /^\d{10}$/; // 10-digit number
    return regex.test(phone);
  }
});
