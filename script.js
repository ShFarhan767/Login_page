
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

    function validateForm() {
      // Call both email and password validation functions
      var isEmailValid = validateEmail();
      var isPasswordValid = validatePassword();

      // Return true only if both email and password are valid
      return isEmailValid && isPasswordValid;
    }

function validatePassword() {
    var passwordInput = document.getElementById('passwordInput');
    var passwordError = document.getElementById('passwordError');
    var password = passwordInput.value;

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        return false;
    }

    // Check for at least one symbol
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
        passwordError.textContent = 'Password must contain at least one symbol';
        return false;
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
        passwordError.textContent = 'Password must contain at least one number';
        return false;
    }

    // Clear any previous error message
    passwordError.textContent = '';

    // If all checks pass, allow form submission
    return true;
};

function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;


    // Regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }

    // Clear any previous error message
    emailError.textContent = '';

    // If the email is valid, allow form submission
    return true;
}